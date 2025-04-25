import { useState } from 'react';
import { motion } from 'framer-motion';

const MenuPreview = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const featuredItems = [
    {
      name: 'Coraçãozinho',
      description: 'Espeto de Coraçãozinho.',
      price: 'R$ 14',
      image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/25081904-1d7f-47bd-9ac1-2034adc9dded/202101061113_fJXm_.jpeg'
    },
    {
      name: 'Linguiça de Costela Angus',
      description: 'Espeto de Linguiça de Costela Angus.',
      price: 'R$ 20',
      image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/25081904-1d7f-47bd-9ac1-2034adc9dded/202309051032_3675_i.jpg'
    },
    {
      name: 'Denver Steak Angus',
      description: 'Cubos perfeitos de Cowboy Steak Angus no espeto.',
      price: 'R$ 26',
      image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/25081904-1d7f-47bd-9ac1-2034adc9dded/202101061123_fGkk_.jpeg'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredItems.map((item, index) => (
        <motion.div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-lg h-80"
          onHoverStart={() => setHoveredItem(index)}
          onHoverEnd={() => setHoveredItem(null)}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                transform: hoveredItem === index ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-accent">
            <h3 className="text-xl font-display font-semibold mb-2">{item.name}</h3>
            <p className="mb-3 text-sm opacity-90">{item.description}</p>
            <div className="font-display text-lg text-primary">{item.price}</div>
          </div>
          
          {hoveredItem === index && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                >
                  <span className="text-accent font-display text-sm">PROVAR</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MenuPreview;
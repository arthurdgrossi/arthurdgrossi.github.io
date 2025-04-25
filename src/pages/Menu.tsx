import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beef, Beer, Wine } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

type MenuCategory = 'espetos' | 'bebidas' | 'especiais';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('espetos');
  
  const categories = [
    { id: 'espetos', name: 'Espetos', icon: <Beef size={20} /> },
    { id: 'bebidas', name: 'Bebidas', icon: <Beer size={20} /> },
    { id: 'especiais', name: 'Especiais', icon: <Wine size={20} /> }
  ];
  
  const menuItems = {
    espetos: [
      {
        name: 'Steak Basic',
        description: 'Porco, Frango, Salsichão ou Coraçãozinho',
        price: 'R$ 14',
        image: 'https://github.com/arthurdgrossi/imagens-steakme/blob/main/imagem_2025-04-25_104340480.png?raw=true'
      },
      {
        name: 'Steak Angus',
        description: 'Boi Angus, MeatBall Angus, Linguiça de Costela Angus, Muçarela, Medalhão de Frango',
        price: 'R$ 20',
        image: 'https://github.com/arthurdgrossi/imagens-steakme/blob/main/imagem_2025-04-25_104013068.png?raw=true'
      },
      {
        name: 'Steak Premium',
        description: 'Denver Steak Angus, Cordeiro, Kafta de Cordeiro',
        price: 'R$ 26',
        image: 'https://github.com/arthurdgrossi/imagens-steakme/blob/main/imagem_2025-04-25_103501901.png?raw=true'
      }
    ],
    bebidas: [
      {
        name: 'Não Alcoólicas',
        description: 'Água, Refrigerante, Suco em Lata',
        price: 'R$ 7',
        image: 'https://images.pexels.com/photos/1904262/pexels-photo-1904262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Long Neck',
        description: 'Budweiser, Stella Artois, Spaten, Império Lager',
        price: 'R$ 12',
        image: 'https://images.pexels.com/photos/16655778/pexels-photo-16655778/free-photo-of-alcool-bebida-alcoolica-garrafas-cerveja.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Long Neck Especial',
        description: 'Heineken, Heineken 0, Corona, Becks, Stella s/ Glúten',
        price: 'R$ 14',
        image: 'https://images.pexels.com/photos/4276950/pexels-photo-4276950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    especiais: [
      {
        name: 'Special Drink',
        description: 'IPA Lagunitas, Skol Beats G&T, Smirnoff Ice',
        price: 'R$ 20',
        image: 'https://prezunic.vtexassets.com/arquivos/ids/199813-800-auto?v=638370494068670000&width=800&height=auto&aspect=true'
      },
      {
        name: 'Smoking',
        description: 'Puro Pito',
        price: 'R$ 20',
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-black">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/source/93cbf724467931.5635f4b1f1f30.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent uppercase mb-6">
              Nosso Cardápio
            </h1>
            <p className="text-accent text-xl mb-8">
              Espetos premium preparados com carnes selecionadas
            </p>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-12 bg-accent-dark sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as MenuCategory)}
                className={`flex items-center px-6 py-3 rounded-full font-display text-lg transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-accent shadow-lg'
                    : 'bg-white text-secondary hover:bg-secondary hover:text-accent'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SectionTitle
                title={categories.find(c => c.id === activeCategory)?.name || ''}
                subtitle="Preparados com ingredientes selecionados"
                center
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems[activeCategory].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-display font-semibold">{item.name}</h3>
                        <span className="text-primary font-display font-bold">{item.price}</span>
                      </div>
                      <p className="text-secondary-light">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/88ea3c24467931.5635f4a84091f.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-6">
            Pronto para experimentar?
          </h2>
          <p className="text-accent text-xl mb-8 max-w-2xl mx-auto">
            Venha conhecer nossos espetos premium ou nos chame para seu evento!.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              Reservar Mesa
            </Button>
            <Button to="/events" variant="outline" size="lg">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
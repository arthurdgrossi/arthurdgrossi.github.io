import { motion } from 'framer-motion';
import { Award, Users, BarChart4, Utensils } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const About = () => {
  const teamMembers = [
    {
      name: 'Ricardo Almeida',
      role: 'Chef Principal',
      image: 'https://images.pexels.com/photos/4255483/pexels-photo-4255483.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Juliana Costa',
      role: 'Gerente Geral',
      image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Marcos Paulo',
      role: 'Churrasqueiro Master',
      image: 'https://images.pexels.com/photos/8106190/pexels-photo-8106190.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Camila Santos',
      role: 'Eventos & Catering',
      image: 'https://images.pexels.com/photos/7923909/pexels-photo-7923909.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];
  
  const milestones = [
    {
      year: '2014',
      title: 'Inauguração',
      description: 'Abertura do SteakMe no Vila da Serra com conceito inspirado no Meatpacking District de Nova York.'
    },
    {
      year: '2016',
      title: 'Expansão',
      description: 'Ampliação do espaço e início do serviço de catering para eventos.'
    },
    {
      year: '2018',
      title: 'Prêmio Gastronômico',
      description: 'Reconhecimento como melhor casa de espetos de Belo Horizonte.'
    },
    {
      year: '2020',
      title: 'Menu Renovado',
      description: 'Lançamento de novas opções de espetos e acompanhamentos.'
    },
    {
      year: '2023',
      title: 'Delivery',
      description: 'Expansão para serviço de delivery em algumas partes da região metropolitana.'
    }
  ];
  
  const values = [
    {
      icon: <Utensils size={32} className="text-primary mb-4" />,
      title: 'Qualidade',
      description: 'Utilizamos apenas ingredientes frescos e de alta qualidade em todos os nossos espetos.'
    },
    {
      icon: <Users size={32} className="text-primary mb-4" />,
      title: 'Atendimento',
      description: 'Atendimento personalizado para garantir a melhor experiência aos nossos clientes.'
    },
    {
      icon: <BarChart4 size={32} className="text-primary mb-4" />,
      title: 'Inovação',
      description: 'Estamos sempre inovando e aprimorando nossos processos e cardápio.'
    },
    {
      icon: <Award size={32} className="text-primary mb-4" />,
      title: 'Tradição',
      description: 'Mantemos a tradição e autenticidade em cada espeto que servimos.'
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-texture bg-cover bg-center">
        <div className="absolute inset-0 bg-secondary bg-opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent uppercase mb-6">
              Nossa História
            </h1>
            <p className="text-accent text-xl mb-8">
              Conheça a trajetória do SteakMe, referência em espetos premium em Belo Horizonte desde 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="De onde viemos" 
                subtitle="Nossa inspiração e trajetória"
              />
              <p className="mb-6 text-lg">
                O SteakMe nasceu em 2014 da paixão pela arte do churrasco e pela rica história 
                do bairro Meatpacking District de Nova York. Este distrito, originalmente um centro 
                de produção de carne, se transformou em um dos mais vibrantes polos gastronômicos 
                de Manhattan.
              </p>
              <p className="mb-6 text-lg">
                Inspirados por essa transformação, trouxemos para o Vila da Serra, em Nova Lima, 
                um conceito que une a rusticidade da arquitetura industrial com a sofisticação 
                da gastronomia contemporânea. Nossa especialidade são os espetinhos artesanais, 
                preparados com carnes selecionadas e temperos exclusivos.
              </p>
              <p className="text-lg">
                Com o passar dos anos, nos tornamos referência na produção de espetos em 
                Belo Horizonte e expandimos para o serviço de catering em eventos na região 
                metropolitana.
              </p>
            </div>
            <div>
              <img 
                src="https://github.com/arthurdgrossi/imagens-steakme/blob/main/20-IMG_7185.jpg?raw=true" 
                alt="SteakMe História" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent-dark">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Valores" 
            subtitle="Princípios que guiam nossa trajetória"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {value.icon}
                <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-secondary-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossa Trajetória" 
            subtitle="Os marcos importantes da nossa história"
            center
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary transform md:translate-x-[-50%] hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className="mb-12">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <motion.div 
                      className={`md:px-8 ${index % 2 === 0 ? 'md:pl-0' : 'md:pr-0'}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="text-primary font-display text-2xl font-bold">{milestone.year}</span>
                        <h3 className="text-xl font-display font-semibold my-2">{milestone.title}</h3>
                        <p className="text-secondary-light">{milestone.description}</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2 relative">
                    <div className="absolute left-0 md:left-1/2 top-1/2 transform md:translate-x-[-50%] translate-y-[-50%]">
                      <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary text-accent">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossa Equipe" 
            subtitle="Conheça quem faz o SteakMe acontecer todos os dias"
            center
            light
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-secondary-light p-6 rounded-lg text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-2 border-primary"
                />
                <h3 className="text-xl font-display font-semibold text-accent">{member.name}</h3>
                <p className="text-accent-dark mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Venha conhecer o SteakMe
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Esperamos você para viver essa experiência gastronômica única.
          </p>
          <Button to="/contact" variant="secondary" size="lg">
            Fazer Reserva
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
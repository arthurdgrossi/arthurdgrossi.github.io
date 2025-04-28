import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Users2, Building2, Calendar, Check } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Events = () => {
  const [activeTab, setActiveTab] = useState('corporativo');
  
  const eventTypes = [
    {
      id: 'corporativo',
      title: 'Eventos Corporativos',
      icon: <Building2 size={24} />,
      description: 'Soluções para eventos empresariais, desde coffee breaks a confraternizações.',
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 'casamento',
      title: 'Casamentos',
      icon: <Users2 size={24} />,
      description: 'Menus personalizados para tornar seu casamento um momento inesquecível.',
      image: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'aniversario',
      title: 'Festas de Aniversário',
      icon: <Calendar size={24} />,
      description: 'Opções festivas para celebrar seu aniversário com sabor e alegria.',
      image: 'https://images.pexels.com/photos/226737/pexels-photo-226737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'outros',
      title: 'Eventos Especiais',
      icon: <Users size={24} />,
      description: 'Soluções personalizadas para qualquer tipo de evento ou celebração.',
      image: 'https://images.pexels.com/photos/7091906/pexels-photo-7091906.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];
    
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-70">

        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/source/93cbf724467931.5635f4b1f1f30.jpg' 
            alt='background' 
            className='w-full h-full object-cover'
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent uppercase mb-6">
              Eventos & Catering
            </h1>
            <p className="text-accent text-xl mb-8">
              Leve a experiência SteakMe para o seu próximo evento
            </p>
            <Button variant="primary" size="lg" to="#contact-form">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Tipos de Eventos" 
            subtitle="Soluções personalizadas para cada momento especial"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type) => (
              <motion.div
                key={type.id}
                className={`rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                  activeTab === type.id ? 'ring-4 ring-primary' : ''
                }`}
                onClick={() => setActiveTab(type.id)}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center mb-3">
                    <div className="text-primary mr-3">{type.icon}</div>
                    <h3 className="text-xl font-display font-semibold">{type.title}</h3>
                  </div>
                  <p className="text-secondary-light">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <motion.section 
        className="py-20 bg-secondary text-accent"
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title={eventTypes.find(t => t.id === activeTab)?.title || ''} 
                subtitle="Soluções personalizadas para o seu evento"
                light
              />
              
              {activeTab === 'corporativo' && (
                <div>
                  <p className="mb-6 text-lg">
                    Transforme seus eventos corporativos com nosso serviço de catering especializado 
                    em espetos. Oferecemos soluções completas para coffee breaks, almoços executivos, 
                    confraternizações e eventos empresariais.
                  </p>
                  <p className="mb-6 text-lg">
                    Nossa equipe experiente garante um serviço impecável, com flexibilidade para 
                    atender desde pequenas reuniões até grandes convenções. Cardápios personalizados, 
                    serviço profissional e logística completa para seu evento corporativo.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Coffee breaks e lanches executivos</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Almoços e jantares corporativos</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Confraternizações e eventos de fim de ano</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Lançamentos e eventos promocionais</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'casamento' && (
                <div>
                  <p className="mb-6 text-lg">
                    Torne seu casamento ainda mais especial com nossa estação de espetos. 
                    Oferecemos uma experiência gastronômica única para seus convidados, com 
                    apresentação sofisticada e sabores inesquecíveis.
                  </p>
                  <p className="mb-6 text-lg">
                    Trabalhamos em conjunto com você e seu cerimonial para criar um menu 
                    personalizado que se integre perfeitamente ao seu grande dia.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Stand de espetos para recepção</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Menus personalizados para o casal</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Apresentação sofisticada e elegante</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'aniversario' && (
                <div>
                  <p className="mb-6 text-lg">
                    Comemore seu aniversário com o sabor inconfundível dos espetos do SteakMe. 
                    Nosso serviço de catering é perfeito para festas de aniversário de todas 
                    as idades, desde festas infantis até celebrações de marcos importantes.
                  </p>
                  <p className="mb-6 text-lg">
                    Oferecemos opções flexíveis que podem ser adaptadas ao seu espaço e orçamento, 
                    com pacotes que incluem desde o serviço de espetinhos até bebidas.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Festas em casa ou em locais externos</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Opções para todos os gostos e idades</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Pacotes que cabem no seu orçamento</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Serviço personalizado e descomplicado</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'outros' && (
                <div>
                  <p className="mb-6 text-lg">
                    Para qualquer ocasião especial, o SteakMe oferece soluções de catering 
                    que impressionam. Seja um evento familiar, uma reunião de amigos ou uma 
                    celebração especial, nossos espetos trazem um diferencial para seu evento.
                  </p>
                  <p className="mb-6 text-lg">
                    Trabalhamos com flexibilidade para atender às necessidades específicas 
                    de cada cliente, oferecendo desde o serviço básico até soluções completas 
                    que incluem estrutura e atendimento.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Eventos sociais e familiares</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Festas temáticas e comemorações</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Inaugurações e lançamentos</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-primary mr-2 mt-1" />
                      <span>Eventos culturais e festivais</span>
                    </li>
                  </ul>
                </div>
              )}
              
              <Button to="#contact-form">
                Solicitar Orçamento
              </Button>
            </div>
            
            <div>
              <img 
                src={eventTypes.find(t => t.id === activeTab)?.image || ''} 
                alt={eventTypes.find(t => t.id === activeTab)?.title || ''} 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form for Events */}
      <section id="contact-form" className="py-20 bg-secondary text-accent">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Solicite um Orçamento" 
            subtitle="Preencha o formulário abaixo e entraremos em contato"
            center
            light
          />
          
          <div className="max-w-3xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="event-type" className="block text-accent-dark mb-2">Tipo de Evento</label>
                <select 
                  id="event-type" 
                  className="w-full p-3 bg-secondary-light text-accent border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione o tipo de evento</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="casamento">Casamento</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-accent-dark mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 bg-secondary-light text-accent border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-accent-dark mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 bg-secondary-light text-accent border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-accent-dark mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 bg-secondary-light text-accent border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-accent-dark mb-2">Data do Evento</label>
                <input 
                  type="date" 
                  id="date" 
                  className="w-full p-3 bg-secondary-light text-accent border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-accent-dark mb-2">Número de Convidados</label>
                <input 
                  type="number" 
                  id="guests" 
                  className="w-full p-3 bg-secondary-light text-accent border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="50"
                />
              </div>
              
              <div>
                <label htmlFor="package" className="block text-accent-dark mb-2">Pacote de Interesse</label>
                <select 
                  id="package" 
                  className="w-full p-3 bg-secondary-light text-accent border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Horário de Inicio do Evento</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-accent-dark mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full p-3 bg-secondary-light text-accent border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Detalhes sobre seu evento, necessidades específicas, etc."
                ></textarea>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button variant="primary" size="lg" type="submit">
                  Enviar Solicitação
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
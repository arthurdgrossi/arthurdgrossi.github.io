import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Utensils, Users, Clock } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import MenuPreview from '../components/MenuPreview';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const features = [
    {
      icon: <Utensils size={32} className="text-primary" />,
      title: 'Espetos Artesanais',
      description: 'Nossos espetos são preparados com carnes selecionadas e temperos exclusivos.'
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'Eventos & Catering',
      description: 'Serviço completo para eventos corporativos e celebrações especiais.'
    },
    {
      icon: <Award size={32} className="text-primary" />,
      title: 'Tradição & Qualidade',
      description: 'Desde 2014 servindo os melhores espetos de Belo Horizonte.'
    },
    {
      icon: <Clock size={32} className="text-primary" />,
      title: 'Atendimento Rápido',
      description: 'Equipe treinada para oferecer o melhor atendimento aos nossos clientes.'
    }
  ];
  
  const testimonials = [
    {
      name: 'Carlos Silva',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Os melhores espetinhos que já provei. O ambiente é fantástico e o atendimento impecável.',
      rating: 5
    },
    {
      name: 'Ana Ferreira',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Contratei para um evento corporativo e todos adoraram. Recomendo o serviço de catering deles.',
      rating: 5
    },
    {
      name: 'Marcelo Santos',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Frequento o SteakMe desde a inauguração e a qualidade se mantém excelente. O espetinho de picanha é imperdível!',
      rating: 5
    }
  ];

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-60">
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/source/93cbf724467931.5635f4b1f1f30.jpg' 
            alt='background' 
            className='w-full h-full object-cover'
            />

            {/* Camada preta de opacidade */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Camada de gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-transparent to-black opacity-70"></div>

          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-accent font-display font-bold uppercase leading-tight mb-4">
              A experiência <span className="text-primary">autêntica</span> em Espetos Premium
            </h1>
            <p className="text-accent text-lg mb-8">
              Referência em espetos premium em Belo Horizonte desde 2014, inspirados 
              pela história do bairro Meatpacking em Nova York.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/menu" size="lg">
                Nosso Cardápio
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Fale Conosco
              </Button>
              <Button href="https://www.ifood.com.br/delivery/belo-horizonte-mg/steakme-vila-da-serra/25081904-1d7f-47bd-9ac1-2034adc9dded" variant="outline" size="lg">
                Peça pelo Ifood
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Por que nos escolher" 
            subtitle="Conheça o que torna o SteakMe especial"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 shadow-md rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-secondary text-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-texture bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://github.com/arthurdgrossi/imagens-steakme/blob/main/ambienteSTK.jpg?raw=true" 
                alt="SteakMe Ambiente" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <SectionTitle 
                title="Nossa História" 
                subtitle="Tradição e paixão desde 2014"
                light
              />
              <p className="mb-6 text-lg">
                O SteakMe nasceu da paixão pela culinária de churrasco e pela rica história do 
                distrito Meatpacking de NYC. Estabelecidos no Vila da Serra desde 2014, 
                nos tornamos referência na produção de espetos em Belo Horizonte.
              </p>
              <p className="mb-8 text-lg">
                Nossa missão é oferecer uma experiência gastronômica única, combinando 
                técnicas tradicionais com um ambiente inspirado no estilo industrial nova-iorquino.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary hover:text-primary-light font-display uppercase tracking-wider">
                Conheça mais <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Destaques" 
            subtitle="Uma pequena amostra do nosso cardápio"
            center
          />
          
          <MenuPreview />
          
          <div className="text-center mt-12">
            <Button to="/menu" size="lg">
              Ver Cardápio Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Events Banner Section */}
      <section className="py-24 bg-primary relative">
        <div className="absolute inset-0 bg-texture bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-accent uppercase mb-6">
            Eventos:
          </h2>
          <p className="text-accent text-xl max-w-3xl mx-auto mb-10">
            Oferecemos serviços de catering para eventos corporativos e particulares. 
            Leve nossos deliciosos espetinhos para o seu próximo evento.
          </p>
          <Button to="/events" variant="secondary" size="lg">
            Saiba Mais
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent-dark">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="O que dizem nossos clientes" 
            subtitle="Experiências de quem já provou nossos espetinhos"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Pronto para experimentar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visite-nos no Vila da Serra ou faça sua reserva online. 
            A experiência SteakMe espera por você.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              Faça sua Reserva
            </Button>
            <Button href="https://www.google.com/maps/place/Steak+Me/@-19.9779995,-43.9448027,17z/data=!3m1!4b1!4m6!3m5!1s0xa6980302d3cf17:0x6447cbd94102aff!8m2!3d-19.9780046!4d-43.9422278!16s%2Fg%2F11b8_2swhr?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D" variant="outline" size="lg">
              Como Chegar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
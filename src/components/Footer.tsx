import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Beef, Bike } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-secondary text-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed">
              Referência em espetos premium em Belo Horizonte desde 2014. Inspirados pela 
              história do bairro Meatpacking em Nova York, oferecemos uma experiência 
              única com sabores autênticos.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-4 text-primary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-primary mr-2 mt-0.5" />
                <span>(31) 3646-4436</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary mr-2 mt-0.5" />
                <span>contato@steakme.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={30} className="text-primary mr-2 mt-0.5" />
                <span>Al Oscar Niemeyer, 951 - Vila da Serra, Nova Lima, Brazil 34000000</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-4 text-primary">Horários</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={18} className="text-primary mr-2 mt-0.5" />
                <div>
                  <p>Segunda a Quinta</p>
                  <p className="text-sm">17:00 - 23:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-primary mr-2 mt-0.5" />
                <div>
                  <p>Sexta e Sábado</p>
                  <p className="text-sm">17:00 - 00:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-primary mr-2 mt-0.5" />
                <div>
                  <p>Domingo</p>
                  <p className="text-sm">Fechado.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-4 text-primary">Links</h3>
            <ul className="space-y-2">
              {['home', 'menu', 'about', 'events', 'contact'].map((item) => (
                <li key={item}>
                  <NavLink 
                    to={item === 'home' ? '/' : `/${item}`}
                    className="hover:text-primary transition-colors block py-1 capitalize"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.ifood.com.br/delivery/belo-horizonte-mg/steakme-vila-da-serra/25081904-1d7f-47bd-9ac1-2034adc9dded" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
                aria-label="Ifood"
              >
                <Bike size={24} />
              </a>
              <a 
                href="https://www.instagram.com/steakmeplease/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-light mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} SteakMe. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center">
            <Beef size={18} className="text-primary mr-2" />
            <span className="text-sm">Desde 2014 | Vila da Serra, Nova Lima - MG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
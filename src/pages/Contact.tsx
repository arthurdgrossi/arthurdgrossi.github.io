import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary">
        <div className="absolute inset-0 bg-texture bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent uppercase mb-6">
              Fale Conosco
            </h1>
            <p className="text-accent text-xl mb-8">
              Estamos ansiosos para atendê-lo e responder a todas as suas dúvidas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Entre em Contato" 
                subtitle="Estamos prontos para atendê-lo"
              />
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-primary text-accent rounded-full p-3 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-1">Endereço</h3>
                    <p className="text-secondary-light">Vila da Serra, Nova Lima - MG</p>
                    <p className="text-secondary-light">CEP: 34000-000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-accent rounded-full p-3 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-1">Telefone</h3>
                    <p className="text-secondary-light">(31) 3333-4444</p>
                    <p className="text-secondary-light">(31) 99999-8888 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-accent rounded-full p-3 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-1">E-mail</h3>
                    <p className="text-secondary-light">contato@steakme.com.br</p>
                    <p className="text-secondary-light">eventos@steakme.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-accent rounded-full p-3 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-1">Horário de Funcionamento</h3>
                    <p className="text-secondary-light">Segunda a Quinta: 17:00 - 23:00</p>
                    <p className="text-secondary-light">Sexta e Sábado: 17:00 - 00:00</p>
                    <p className="text-secondary-light">Domingo: FECHADO</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent-dark p-6 rounded-lg">
                <h3 className="text-xl font-display font-semibold mb-4">Redes Sociais</h3>
                <p className="mb-4">Siga-nos e fique por dentro das novidades, promoções e eventos.</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-accent rounded-full p-3 hover:bg-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-accent rounded-full p-3 hover:bg-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://api.whatsapp.com/send?phone=5531999998888" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-accent rounded-full p-3 hover:bg-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-display font-semibold mb-6 text-center">
                  Envie-nos uma Mensagem
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-secondary-light mb-2">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-secondary-light mb-2">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-secondary-light mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-secondary-light mb-2">Assunto</label>
                    <select 
                      id="subject" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="reserva">Reserva</option>
                      <option value="eventos">Eventos</option>
                      <option value="feedback">Feedback</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-secondary-light mb-2">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Sua mensagem aqui..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="primary" size="lg" type="submit">
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20 bg-secondary text-accent">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Faça sua Reserva" 
            subtitle="Garantimos a melhor experiência para você e seus convidados"
            center
            light
          />
          
          <div className="max-w-3xl mx-auto bg-secondary-light p-8 rounded-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="res-name" className="block text-accent-dark mb-2">Nome</label>
                <input 
                  type="text" 
                  id="res-name" 
                  className="w-full p-3 bg-secondary border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-accent"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="res-phone" className="block text-accent-dark mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="res-phone" 
                  className="w-full p-3 bg-secondary border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-accent"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="res-date" className="block text-accent-dark mb-2">Data</label>
                <input 
                  type="date" 
                  id="res-date" 
                  className="w-full p-3 bg-secondary border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-accent"
                />
              </div>
              
              <div>
                <label htmlFor="res-time" className="block text-accent-dark mb-2">Horário</label>
                <input 
                  type="time" 
                  id="res-time" 
                  className="w-full p-3 bg-secondary border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-accent"
                />
              </div>
              
              <div>
                <label htmlFor="res-people" className="block text-accent-dark mb-2">Número de Pessoas</label>
                <select 
                  id="res-people" 
                  className="w-full p-3 bg-secondary border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-accent"
                >
                  <option value="1">1 pessoa</option>
                  <option value="2">2 pessoas</option>
                  <option value="3">3 pessoas</option>
                  <option value="4">4 pessoas</option>
                  <option value="5">5 pessoas</option>
                  <option value="6">6 pessoas</option>
                  <option value="7+">7 ou mais pessoas</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="res-occasion" className="block text-accent-dark mb-2">Ocasião</label>
                <select 
                  id="res-occasion" 
                  className="w-full p-3 bg-secondary border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-accent"
                >
                  <option value="">Selecione a ocasião (opcional)</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="negocios">Almoço/Jantar de Negócios</option>
                  <option value="romantico">Jantar Romântico</option>
                  <option value="casual">Casual</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="res-notes" className="block text-accent-dark mb-2">Observações Especiais</label>
                <textarea 
                  id="res-notes" 
                  rows={3}
                  className="w-full p-3 bg-secondary border border-secondary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-accent"
                  placeholder="Preferências, alergias, ocasiões especiais, etc."
                ></textarea>
              </div>
              
              <div className="md:col-span-2 text-center">
                <Button variant="primary" size="lg" type="submit">
                  Confirmar Reserva
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Como Chegar" 
            subtitle="Estamos localizados no Vila da Serra, Nova Lima - MG"
            center
          />
          
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15002.054376076666!2d-43.9314391748922!3d-19.9772483486274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bd58dcd7e821%3A0x551152abf1d38c1f!2sVila%20da%20Serra%2C%20Nova%20Lima%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1697754822010!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização SteakMe"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Vamos tornar seu momento especial!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos proporcionar 
            uma experiência gastronômica inesquecível.
          </p>
          <Button href="tel:3133334444" variant="secondary" size="lg">
            Ligar Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
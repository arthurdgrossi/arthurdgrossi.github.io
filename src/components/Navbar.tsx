import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" onClick={closeMenu}>
          <Logo />
        </NavLink>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          {['home', 'menu', 'about', 'events', 'contact'].map((item) => (
            <li key={item}>
              <NavLink 
                to={item === 'home' ? '/' : `/${item}`}
                className={({ isActive }) => 
                  `font-display uppercase tracking-wider text-lg hover:text-primary transition-colors ${
                    isActive ? 'text-primary' : 'text-accent'
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-accent hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-secondary z-40 pt-20 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 p-4">
          {['home', 'menu', 'about', 'events', 'contact'].map((item) => (
            <li key={item} className="w-full">
              <NavLink 
                to={item === 'home' ? '/' : `/${item}`}
                onClick={closeMenu}
                className={({ isActive }) => 
                  `block text-center py-3 font-display uppercase tracking-wider text-2xl hover:text-primary transition-colors ${
                    isActive ? 'text-primary' : 'text-accent'
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
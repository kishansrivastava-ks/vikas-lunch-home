import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { cn } from '../../lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'Our Story' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/branches', label: 'Locations' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isTransparent
          ? 'bg-transparent border-transparent py-4'
          : 'bg-background/95 backdrop-blur-md shadow-md border-border py-2'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-2 rounded-full text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
              <UtensilsCrossed className="h-6 w-6" />
            </div>
            <span
              className={cn(
                'font-serif font-bold text-2xl transition-colors',
                isTransparent ? 'text-white drop-shadow-md' : 'text-primary'
              )}
            >
              Vikas Lunch Home
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'font-medium text-sm uppercase relative group transition-colors',
                    isTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-foreground hover:text-primary',
                    isActive && 'font-bold text-primary'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              );
            })}

            {/* <Link to="/menu">
              <button className="bg-secondary text-primary-foreground px-6 py-2 rounded-full font-bold text-sm uppercase hover:bg-primary hover:text-white transition-all shadow-lg">
                Order Online
              </button>
            </Link> */}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'p-2 rounded-md transition-colors',
                isTransparent ? 'text-white' : 'text-primary'
              )}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-background shadow-xl overflow-hidden transition-all',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-6 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'block text-center py-3 rounded-md font-medium transition-colors',
                location.pathname === link.href
                  ? 'text-primary bg-primary/5'
                  : 'text-foreground hover:bg-primary/5'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

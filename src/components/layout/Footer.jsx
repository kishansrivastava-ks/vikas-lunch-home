import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const OPENING_HOURS = [
  { day: 'Sunday', time: '11:30 AM - 3:30 PM | 06:30 PM - 10:00 PM', closed: false },
  { day: 'Monday', time: '11:30 AM - 3:30 PM' },
  { day: 'Tuesday', time: '11:30 AM - 3:30 PM' },
  { day: 'Wednesday', time: '11:30 AM - 3:30 PM' },
  { day: 'Thursday', time: '11:30 AM - 3:30 PM' },
  { day: 'Friday', time: '11:30 AM - 3:30 PM' },
  { day: 'Saturday', time: '11:30 AM - 3:30 PM' },
];

const todayIndex = new Date().getDay(); // 0 = Sunday

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold text-secondary">Vikas Lunch Home</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience the authentic flavors of Tulunadu. Crafted with passion, served with love.
              A culinary journey through the spices of Coastal Karnataka.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-secondary transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-secondary transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span>
                  Near Attur Church, Attur Church Road,
                  <br />
                  Salmar, Karkala-574104, Karnataka
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+91 95383 64118</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>vikasrdk@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-secondary">Opening Hours</h4>

            <ul className="space-y-2 text-primary-foreground/90">
              {OPENING_HOURS.map((item, index) => {
                const isToday = index === todayIndex;

                return (
                  <li
                    key={item.day}
                    className={`flex justify-between px-3 py-1 rounded-md transition-colors
            ${isToday ? 'bg-secondary/20 font-semibold text-secondary' : ''}`}
                  >
                    <span>
                      {item.day}
                      {isToday && ' (Today)'}
                    </span>

                    <span className={item.closed ? 'text-red-400 font-semibold' : ''}>
                      {item.time}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Vikas Lunch Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

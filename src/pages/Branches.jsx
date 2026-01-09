import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '../components/common/Button';
import { SectionHeader } from '../components/SectionHeader';

const LOCATIONS = [
  {
    id: 1,
    city: 'Busstand Karkala ( Veg Only )',
    name: 'Vikas Lunch Home',
    address: '6X7X+4GF, SH 37, Hirgana, Karkala, Karnataka 574104',
    phone: '(+91) 9538 364118',
    hours: '07:00 AM - 07:00 PM',
    image: '/images/shop1.webp',
  },
  {
    id: 2,
    city: 'AC Road Karkala',
    name: 'Vikas Lunch Home',
    address: 'AC Road Karkala, Karnataka',
    phone: '(+91) 97393 17535',
    hours: '11:00 AM - 03:00 PM | 06:00 PM - 09:30 PM',
    image: '/images/shop2.webp',
  },
  {
    id: 3,
    city: 'Moodbidri',
    name: 'Vikas Lunch Home',
    address: 'Moodbidri, Karnataka',
    phone: '(+91) 95383 64118',
    hours: '11:00 AM - 03:00 PM | 06:00 PM - 10:00 PM',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Branches() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Locations" subtitle="Find Us Near You" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                  {loc.city}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{loc.name}</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-secondary shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold">
                    Get Directions
                  </Button>
                  <a href={`tel:${loc.phone.replace(/[^\d+]/g, '')}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/5 font-bold"
                    >
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-4 h-[400px] flex items-center justify-center border border-border relative overflow-hidden group">
          <div className="absolute inset-0 bg-neutral-200 group-hover:bg-neutral-300 transition-colors" />
          <div className="text-center relative z-10">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
            <p className="text-xl font-serif font-bold text-primary">Map Integration Coming Soon</p>
            <p className="text-muted-foreground">
              We are currently expanding our digital presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

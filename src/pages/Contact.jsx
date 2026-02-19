import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';

const LOCATIONS = [
  // {
  //   id: 1,
  //   city: 'Busstand Karkala ( Veg Only )',
  //   name: 'Vikas Lunch Home',
  //   address: '6X7X+4GF, SH 37, Hirgana, Karkala, Karnataka 574104',
  //   phone: '(+91) 9538 364118',
  // },
  {
    id: 2,
    city: 'AC Road Karkala',
    name: 'Vikas Lunch Home',
    address: 'AC Road Karkala, Karnataka',
    phone: '(+91) 78921 38077',
  },
  {
    id: 3,
    city: 'Moodbidri',
    name: 'Vikas Lunch Home',
    address: 'Moodbidri, Karnataka',
    phone: '(+91) 95383 64118',
  },
];

export default function Contact() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Contact Us" subtitle="We’d Love to Hear From You" />

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Call Us',
              value: '+91 95383 64118',
              sub: 'Mon – Sun, 10:00 AM – 11:00 PM',
            },
            {
              title: 'Email',
              value: 'vikasrdk@gmail.com',
              sub: 'We reply within 24 hours',
            },
            {
              title: 'Visit Us',
              value: 'Karkala, Karnataka',
              sub: 'Multiple locations across the city',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-border bg-white p-8 shadow-md text-center"
            >
              <h3 className="text-lg font-serif font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-foreground font-semibold">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Locations + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
          {/* Locations */}
          {/* Locations */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Our Locations</h3>

            <div className="space-y-6">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  className="rounded-xl border border-border p-6 hover:bg-primary/5 transition"
                >
                  <h4 className="font-bold text-lg text-foreground">{loc.name}</h4>

                  <p className="text-sm font-semibold text-secondary mt-1">{loc.city}</p>

                  <p className="text-sm text-muted-foreground mt-2">{loc.address}</p>

                  <p className="text-sm font-semibold text-primary mt-3">{loc.phone}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Karkala%20Karnataka&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-white p-8 shadow-lg"
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send an Inquiry</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-bold tracking-wide hover:bg-primary/90 transition"
              >
                Submit Inquiry
              </button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

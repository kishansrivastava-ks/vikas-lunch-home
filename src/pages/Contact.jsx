import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';

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
              value: '+91 98765 43210',
              sub: 'Mon – Sun, 10:00 AM – 11:00 PM',
            },
            {
              title: 'Email',
              value: 'contact@yourrestaurant.com',
              sub: 'We reply within 24 hours',
            },
            {
              title: 'Visit Us',
              value: 'Jaipur, Rajasthan',
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
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Our Locations</h3>

            <div className="space-y-6">
              {[
                {
                  name: 'C-Scheme Branch',
                  address: '123, MI Road, C-Scheme, Jaipur',
                  phone: '+91 98765 43210',
                },
                {
                  name: 'Vaishali Nagar Branch',
                  address: '45, Vaishali Nagar, Jaipur',
                  phone: '+91 91234 56789',
                },
              ].map((loc, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border p-6 hover:bg-primary/5 transition"
                >
                  <h4 className="font-bold text-lg text-foreground">{loc.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{loc.address}</p>
                  <p className="text-sm font-semibold text-secondary mt-2">{loc.phone}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Jaipur%20Rajasthan&output=embed"
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

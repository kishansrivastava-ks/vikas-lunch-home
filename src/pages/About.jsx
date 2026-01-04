import { motion } from 'framer-motion';
import { Utensils, Heart, History } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export default function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader title="Our Story" subtitle="Heritage & Passion" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            More than just a restaurant, Vikas Lunch Home is a culinary destination celebrating the
            rich tapestry of Indian culture.
          </p>
        </div>

        {/* Story Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">
              From Mumbai to Your Plate
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Our journey began in the bustling streets of Mumbai, where food is not just sustenance
              but a celebration of life. Chef Rajesh Kumar brought his grandmother's secret spice
              blends across the ocean, dreaming of sharing authentic Indian flavors with the world.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every dish we serve tells a story—of fragrant spices sun-dried on rooftops, of
              slow-cooked curries simmering in clay pots, and of the warm hospitality that defines
              Indian culture.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* unsplash: indian spices market colorful */}
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop"
              alt="Indian Spices"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block border border-border">
              <p className="font-serif italic text-primary text-lg">
                "Food is the ingredient that binds us together."
              </p>
              <p className="text-sm font-bold mt-2 text-secondary">- Chef Rajesh Kumar</p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="bg-primary/5 rounded-3xl p-12 mb-24 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: History,
                title: 'Heritage',
                text: 'We honor centuries-old cooking traditions, using clay ovens (tandoors) and authentic techniques.',
              },
              {
                icon: Utensils,
                title: 'Quality',
                text: 'We source premium spices directly from India and fresh produce from local organic farms.',
              },
              {
                icon: Heart,
                title: 'Hospitality',
                text: "Atithi Devo Bhava - 'The guest is equivalent to God'. We treat every visitor like family.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-primary">
                  <item.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div>
          <SectionHeader title="A Glimpse Inside" subtitle="Gallery" centered className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 row-span-2 rounded-2xl overflow-hidden relative group"
            >
              {/* unsplash: restaurant interior elegant dining */}
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Interior"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden relative group"
            >
              {/* unsplash: naan bread tandoor */}
              <img
                src="https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=600&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Naan"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden relative group"
            >
              {/* unsplash: indian dessert gulab jamun */}
              <img
                src="https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=600&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Dessert"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

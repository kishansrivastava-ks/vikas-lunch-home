import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* unsplash: indian food banquet table spread dark moody lighting */}
          <img
            // src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=2000&auto=format&fit=crop"
            src="/images/home-hero.webp"
            alt="Indian Feast"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" /> */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">
              Welcome to Vikas Lunch Home
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-snug">
              Taste the <span className="text-secondary italic">Soul</span> of Karavali - Tulunadu
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Experience authentic flavors, traditional recipes, and a warm atmosphere that brings
              the vibrant culture of Coastal Karnataka to your plate.
            </p>
            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/menu">
                <button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-secondary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-secondary/20 w-full sm:w-auto">
                  View Menu
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto">
                  Contact
                </button>
              </Link>
            </div> */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link to="/menu" className="w-full sm:w-auto">
                <button className="px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-secondary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-secondary/20 w-full sm:w-auto">
                  View Menu
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="pattern-bg absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary rounded-tl-3xl z-0" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-3xl z-0" />
              {/* unsplash: indian chef cooking spices */}
              <img
                src="/images/home-about.png"
                alt="Chef Cooking"
                className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Tradition in Every Bite
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded in 1995, Vikas Lunch Home began with a simple mission: to serve authentic
                Indian cuisine that reminds our guests of home. Using family recipes passed down
                through generations, we blend traditional spices with modern techniques.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our chefs carefully select fresh, locally-sourced ingredients to create dishes that
                are not just meals, but memories.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors text-lg group"
              >
                Read More About Us
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Signature Delicacies" subtitle="Guest Favorites" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Butter Chicken',
                desc: 'Tender chicken cooked in a rich, creamy tomato gravy with fenugreek.',
                price: '$18',
                image: '/images/dish1.png',
              },
              {
                title: 'Lamb Rogan Josh',
                desc: 'Aromatic lamb curry with Kashmiri spices, yogurt, and saffron.',
                price: '$22',
                image: '/images/dish2.png',
              },
              {
                title: 'Paneer Tikka Masala',
                desc: 'Grilled cottage cheese cubes in a spicy, onion-tomato gravy.',
                price: '$16',
                image: '/images/dish3.png',
              },
            ].map((dish, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                  {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-primary shadow-lg">
                    {dish.price}
                  </div> */}
                </div>
                {/* <h3 className="text-2xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {dish.title}
                </h3> */}
                {/* <p className="text-muted-foreground">{dish.desc}</p> */}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                View Full Menu
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground relative">
        <div className="absolute inset-0 opacity-10 pattern-bg bg-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Why Dine With Us"
            subtitle="The Experience"
            centered
            light
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              // {
              //   icon: Star,
              //   title: 'Master Chefs',
              //   desc: "Decades of culinary excellence from India's finest kitchens.",
              // },
              {
                icon: Clock,
                title: 'Fast Service',
                desc: 'Prompt, attentive service without compromising on quality.',
              },
              {
                icon: Award,
                title: 'Authentic Taste',
                desc: 'No compromises. Traditional recipes with original spices.',
              },
              {
                icon: Users,
                title: 'Family Friendly',
                desc: 'A warm atmosphere perfect for family gatherings and events.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

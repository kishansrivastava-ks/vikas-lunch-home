import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../components/common/Badge';
import { SectionHeader } from '../components/SectionHeader';

const MENU_ITEMS = [
  // Starters
  {
    id: 1,
    name: 'Vegetable Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas.',
    price: '$8',
    category: 'Starters',
    veg: true,
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Chicken 65',
    description: 'Deep-fried chicken marinated in ginger, lemon, and red chilies.',
    price: '$12',
    category: 'Starters',
    spicy: true,
    veg: false,
    image:
      'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=400&auto=format&fit=crop',
  },

  // Main Course
  {
    id: 3,
    name: 'Butter Chicken',
    description: 'Classic chicken cooked in a creamy tomato sauce with fenugreek.',
    price: '$18',
    category: 'Main Course',
    veg: false,
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Palak Paneer',
    description: 'Cottage cheese cubes in a smooth spinach gravy with garlic.',
    price: '$16',
    category: 'Main Course',
    veg: true,
    image:
      'https://images.unsplash.com/photo-1589647365517-7c28b0c95a04?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Lamb Vindaloo',
    description: 'Spicy Goan curry with tender lamb and vinegar.',
    price: '$20',
    category: 'Main Course',
    spicy: true,
    veg: false,
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400&auto=format&fit=crop',
  },

  // Breads
  {
    id: 6,
    name: 'Garlic Naan',
    description: 'Soft leavened bread topped with chopped garlic and cilantro.',
    price: '$5',
    category: 'Breads',
    veg: true,
    image:
      'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=400&auto=format&fit=crop',
  },

  // Rice
  {
    id: 7,
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with spiced chicken and saffron.',
    price: '$18',
    category: 'Rice',
    spicy: true,
    veg: false,
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&auto=format&fit=crop',
  },

  // Desserts
  {
    id: 8,
    name: 'Gulab Jamun',
    description: 'Fried milk dumplings soaked in rose-flavored sugar syrup.',
    price: '$7',
    category: 'Desserts',
    veg: true,
    image:
      'https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=400&auto=format&fit=crop',
  },
];

const CATEGORIES = ['Starters', 'Main Course', 'Breads', 'Rice', 'Desserts', 'Beverages'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Main Course');

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Menu" subtitle="Exquisite Flavors" />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex gap-6 items-start group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-primary/10"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-2 border-primary/10 shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-primary">{item.name}</h3>
                    <span className="text-lg font-bold text-secondary ml-4">{item.price}</span>
                  </div>

                  <div className="flex gap-2 mb-2">
                    {item.veg ? (
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600 text-xs px-2 py-0"
                      >
                        Veg
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-red-600 border-red-600 text-xs px-2 py-0"
                      >
                        Non-Veg
                      </Badge>
                    )}
                    {item.spicy && (
                      <Badge
                        variant="outline"
                        className="text-orange-600 border-orange-600 text-xs px-2 py-0"
                      >
                        Spicy
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>Menu items for this category are coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

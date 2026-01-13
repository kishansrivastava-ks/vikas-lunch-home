import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronLeft, ChevronRight, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { SectionHeader } from '../components/SectionHeader';

// --- DATA CONFIGURATION ---

const MENU_DATA = {
  soups: {
    label: 'Soups',
    veg: [
      { name: 'Veg Manchow', price: 70 },
      { name: 'Veg Hot and Sour Soup', price: 70 },
    ],
    nonVeg: [
      { name: 'Chicken Manchow', price: 90 },
      { name: 'Chicken Hot and Sour', price: 90 },
    ],
  },
  dryItems: {
    label: 'Dry Items',
    veg: [
      { name: 'Paneer Chilli', price: 120 },
      { name: 'Paneer Manchurian', price: 120 },
      { name: 'Paneer Pepper', price: 120 },
      { name: 'Paneer Ghee Roast', price: 150 },
      { name: 'Paneer Butter Garlic', price: 180 },
      { name: 'Paneer 65', price: 110 },
      { name: 'Mushroom Chilli', price: 120 },
      { name: 'Mushroom Manchurian', price: 120 },
      { name: 'Mushroom Pepper', price: 120 },
      { name: 'Mushroom Ghee Roast', price: 150 },
      { name: 'Mushroom Butter Garlic', price: 180 },
      { name: 'Baby Corn Chilli', price: 110 },
      { name: 'Baby Corn Manchurial', price: 110 },
      { name: 'Baby Corn Pepper', price: 110 },
      { name: 'Gobi Manchurian', price: 100 },
      { name: 'Gobi Chilli', price: 100 },
      { name: 'Gobi Pepper', price: 100 },
    ],
    nonVeg: [
      { name: 'Chicken Pepper', price: 150 },
      { name: 'Lemon Chicken', price: 150 },
      { name: 'Chicken Butter Garlic', price: 200 },
      { name: 'Chicken Chilli', price: 150 },
      { name: 'Chicken Manchurian', price: 150 },
      { name: 'Chicken Hot Garlic', price: 150 },
      { name: 'Chicken Lamba', price: 180 },
      { name: 'Chicken Lolypop', price: 200 },
      { name: 'Chicken Ghee Roast', price: 250 },
      { name: 'Chicken Sukka', price: 150 },
      { name: 'Chicken Kadipatha', price: 180 },
      { name: 'Chicken Angari', price: 180 },
      { name: 'Chicken Andra Roast', price: 200 },
      { name: 'Chicken Kabab', price: 150 },
      { name: 'Chicken Pulimunchi', price: 150, note: 'Boneless 30 Extra' },
      { name: 'Egg Pepper', price: 130 },
      { name: 'Egg Chilli', price: 130 },
      { name: 'Egg Manchuri', price: 130 },
    ],
  },
  riceItems: {
    label: 'Rice',
    veg: [
      { name: 'Veg Fried Rice', price: 100 },
      { name: 'Paneer Fried Rice', price: 120 },
      { name: 'Mushroom Fried Rice', price: 110 },
      { name: 'Mixed Veg Fried Rice', price: 120 },
      { name: 'Paneer Schezwan Fried Rice', price: 130 },
      { name: 'Mixed Veg Schezwan Fried Rice', price: 130 },
    ],
    nonVeg: [
      { name: 'Chicken Fried Rice', price: 120 },
      { name: 'Egg Fried Rice', price: 110 },
      { name: 'Prawns Fried Rice', price: 200 },
      { name: 'Chicken Schezwan Fried Rice', price: 120 },
      { name: 'Malasian Chicken Fried Rice', price: 150 },
    ],
  },
  noodles: {
    label: 'Noodles',
    veg: [
      { name: 'Veg Noodles', price: 100 },
      { name: 'Paneer Noodles', price: 120 },
      { name: 'Mushroom Noodles', price: 110 },
      { name: 'Mixed Veg Noodles', price: 120 },
      { name: 'Veg Schezwan Noodles', price: 110 },
      { name: 'Paneer Schezwan Noodles', price: 130 },
      { name: 'Mushroom Schezwan Noodles', price: 120 },
      { name: 'Mixed Veg Schezwan Noodles', price: 130 },
    ],
    nonVeg: [
      { name: 'Chicken Noodles', price: 120 },
      { name: 'Egg Noodles', price: 110 },
      { name: 'Chicken Schezwan Noodles', price: 130 },
      { name: 'Egg Schezwan Noodles', price: 120 },
      { name: 'Garlic Chicken Noodles', price: 150 },
    ],
  },
  biriyani: {
    label: 'Biriyani',
    veg: [
      { name: 'Paneer Biriyani', price: 150 },
      { name: 'Mushroom Biriyani', price: 150 },
      { name: 'Veg Biriyani', price: 130 },
      { name: 'Mixed Veg Biriyani', price: 150 },
    ],
    nonVeg: [
      { name: 'Chicken Biriyani (Full)', price: 180 },
      { name: 'Chicken Biriyani (Half)', price: 100 },
      { name: 'Prawns Biriyani', price: 200 },
      { name: 'Egg Biriyani', price: 150 },
    ],
  },
  seaFoodItems: {
    label: 'Sea Food',
    // Special structure for seafood
    stylesAvailable: ['Tawa', 'Rawa', 'Ghee Roast', 'Sukka', 'Kabab'],
    fish: [
      { name: 'Pamfret', availability: 'Seasonal' },
      { name: 'Anjal', availability: 'Seasonal' },
      { name: 'Bangude', availability: 'Seasonal' },
      { name: 'Disco', availability: 'Seasonal' },
      { name: 'Kandai', availability: 'Seasonal' },
      { name: 'Kodai', availability: 'Seasonal' },
      { name: 'Muru', availability: 'Seasonal' },
      { name: 'Butai', availability: 'Seasonal' },
      { name: 'Ade', availability: 'Seasonal' },
      { name: 'Silver', availability: 'Seasonal' },
    ],
    otherSeaFood: [
      { name: 'Prawns', availability: 'Seasonal' },
      { name: 'Squid', availability: 'Seasonal' },
      { name: 'Crab', availability: 'Seasonal' },
    ],
  },
};

// Placeholder images for the scanned menu overlay
const MENU_IMAGES = [
  '/images/menu/menu-pg1.jpg',
  '/images/menu/menu-pg2.jpg',
  '/images/menu/menu-pg3.jpg',
  '/images/menu/menu-pg4.jpg',
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('soups');
  const [searchQuery, setSearchQuery] = useState('');

  // Gallery Modal State
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- DERIVED STATE ---

  const categoryKeys = Object.keys(MENU_DATA);

  // Flattens the menu for search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery) return null;
    const query = searchQuery.toLowerCase();
    const results = [];

    Object.entries(MENU_DATA).forEach(([catKey, catData]) => {
      // Helper to push items
      const pushItem = (item, subCat) => {
        if (item.name.toLowerCase().includes(query)) {
          results.push({ ...item, categoryLabel: catData.label, subCat });
        }
      };

      if (catData.veg) catData.veg.forEach((i) => pushItem(i, 'Veg'));
      if (catData.nonVeg) catData.nonVeg.forEach((i) => pushItem(i, 'Non-Veg'));
      if (catData.fish) catData.fish.forEach((i) => pushItem(i, 'Fish'));
      if (catData.otherSeaFood) catData.otherSeaFood.forEach((i) => pushItem(i, 'Sea Food'));
    });
    return results;
  }, [searchQuery]);

  // --- HANDLERS ---

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % MENU_IMAGES.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + MENU_IMAGES.length) % MENU_IMAGES.length);
  };

  // --- RENDER HELPERS ---

  const renderPrice = (item) => {
    if (item.price) return `₹${item.price}`;
    if (item.availability)
      return (
        <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded">
          {item.availability}
        </span>
      );
    return '';
  };

  const MenuItem = ({ item, type }) => (
    <div className="flex justify-between items-start py-3 border-b border-dashed border-gray-200 last:border-0 hover:bg-gray-50 transition-colors px-2 rounded-lg">
      <div className="flex-1 pr-4">
        <div className="flex items-center gap-2">
          {/* Veg/Non-Veg Indicators */}
          {type === 'veg' && (
            <div className="w-4 h-4 border border-green-600 p-[2px] flex items-center justify-center shrink-0 rounded-[2px]">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
          )}
          {type === 'nonVeg' && (
            <div className="w-4 h-4 border border-red-600 p-[2px] flex items-center justify-center shrink-0 rounded-[2px]">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
          )}
          <h4 className="font-medium text-foreground text-lg">{item.name}</h4>
        </div>
        {item.note && <p className="text-xs text-muted-foreground mt-1 ml-6">{item.note}</p>}
        {item.categoryLabel && (
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1 ml-6">
            {item.categoryLabel} • {item.subCat}
          </p>
        )}
      </div>
      <div className="font-bold text-lg text-primary whitespace-nowrap">{renderPrice(item)}</div>
    </div>
  );

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Our Menu" subtitle="Authentic Taste" />

        {/* --- ACTIONS BAR --- */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 sticky top-20 z-10 bg-background/95 backdrop-blur-sm py-4 border-b">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for dishes (e.g., Paneer, Prawns)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* View Full Menu Button */}
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="flex items-center gap-2 px-5 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-md active:scale-95 w-full md:w-auto justify-center"
          >
            <ImageIcon className="w-5 h-5" />
            <span>View Full Menu</span>
          </button>
        </div>

        {/* --- CONTENT AREA --- */}

        {/* CASE 1: SEARCH RESULTS */}
        {searchQuery ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h3 className="text-xl font-serif font-bold mb-6 text-gray-400">
              Found {searchResults.length} results for "{searchQuery}"
            </h3>
            {searchResults.length > 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 divide-y">
                {searchResults.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    item={item}
                    type={
                      item.subCat === 'Veg'
                        ? 'veg'
                        : item.subCat === 'Non-Veg'
                          ? 'nonVeg'
                          : 'neutral'
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
                <p className="text-muted-foreground">No dishes found matching your search.</p>
              </div>
            )}
          </motion.div>
        ) : (
          /* CASE 2: CATEGORY TABS & LIST */
          <>
            {/* Category Navigation (Scrollable on mobile) */}
            <div className="flex overflow-x-auto pb-4 mb-6 gap-3 no-scrollbar mask-gradient">
              {categoryKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 border ${
                    activeCategory === key
                      ? 'bg-primary text-white border-primary shadow-lg scale-105'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-primary/30 hover:bg-primary/5'
                  }`}
                >
                  {MENU_DATA[key].label}
                </button>
              ))}
            </div>

            {/* Menu List Container */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden"
            >
              <div className="p-5 sm:p-8">
                <div className="flex items-baseline justify-between mb-8 border-b pb-4">
                  <h2 className="text-3xl font-serif font-bold text-primary">
                    {MENU_DATA[activeCategory].label}
                  </h2>
                  <span className="text-sm text-gray-400 font-medium">
                    {activeCategory === 'seaFoodItems'
                      ? `${MENU_DATA[activeCategory].fish.length + MENU_DATA[activeCategory].otherSeaFood.length} Items`
                      : `${(MENU_DATA[activeCategory].veg?.length || 0) + (MENU_DATA[activeCategory].nonVeg?.length || 0)} Items`}
                  </span>
                </div>

                {/* SPECIAL RENDER: SEAFOOD */}
                {activeCategory === 'seaFoodItems' ? (
                  <div className="space-y-10">
                    {/* Styles Banner */}
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                      <p className="text-orange-800 font-bold text-sm mb-2 uppercase tracking-wide">
                        Available Preparation Styles
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {MENU_DATA.seaFoodItems.stylesAvailable.map((style) => (
                          <span
                            key={style}
                            className="bg-white text-orange-600 px-3 py-1 rounded-md text-sm font-semibold shadow-sm border border-orange-100"
                          >
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                        <span>🐟</span> Fish Varieties
                      </h3>
                      <div className="grid gap-2">
                        {MENU_DATA.seaFoodItems.fish.map((item, idx) => (
                          <MenuItem key={idx} item={item} type="neutral" />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                        <span>🦐</span> Shellfish & Others
                      </h3>
                      <div className="grid gap-2">
                        {MENU_DATA.seaFoodItems.otherSeaFood.map((item, idx) => (
                          <MenuItem key={idx} item={item} type="neutral" />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* STANDARD RENDER: VEG / NON-VEG */
                  <div className="space-y-10">
                    {MENU_DATA[activeCategory].veg && MENU_DATA[activeCategory].veg.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold text-green-700 mb-4 bg-green-50 inline-block px-4 py-1 rounded-lg border border-green-100">
                          Vegetarian
                        </h3>
                        <div className="grid gap-1">
                          {MENU_DATA[activeCategory].veg.map((item, idx) => (
                            <MenuItem key={idx} item={item} type="veg" />
                          ))}
                        </div>
                      </div>
                    )}

                    {MENU_DATA[activeCategory].nonVeg &&
                      MENU_DATA[activeCategory].nonVeg.length > 0 && (
                        <div>
                          <h3 className="text-lg font-bold text-red-700 mb-4 bg-red-50 inline-block px-4 py-1 rounded-lg border border-red-100">
                            Non-Vegetarian
                          </h3>
                          <div className="grid gap-1">
                            {MENU_DATA[activeCategory].nonVeg.map((item, idx) => (
                              <MenuItem key={idx} item={item} type="nonVeg" />
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* --- SCANNED MENU OVERLAY --- */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col"
          >
            {/* Header */}
            <div className="p-4 flex justify-between items-center text-white border-b border-white/10">
              <h3 className="text-lg font-bold text-white">
                Full Menu ({currentImageIndex + 1}/{MENU_IMAGES.length})
              </h3>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Stage */}
            <div
              className="flex-1 relative flex items-center justify-center p-4 overflow-hidden"
              onClick={(e) => e.target === e.currentTarget && setIsGalleryOpen(false)}
            >
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 z-10 p-3 bg-black/20 text-white rounded-full hover:bg-primary hover:text-white transition-all "
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 z-10 p-3 bg-black/20 text-white rounded-full hover:bg-primary hover:text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* The Image */}
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={MENU_IMAGES[currentImageIndex]}
                alt={`Menu Page ${currentImageIndex + 1}`}
                className="max-h-full max-w-full object-contain shadow-2xl rounded-sm"
              />
            </div>

            {/* Thumbnails Footer */}
            <div className="h-24 bg-black/40 border-t border-white/10 flex items-center justify-center gap-4 px-4 overflow-x-auto">
              {MENU_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative h-16 w-16 rounded overflow-hidden border-2 transition-all shrink-0 ${
                    currentImageIndex === idx
                      ? 'border-primary scale-110'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

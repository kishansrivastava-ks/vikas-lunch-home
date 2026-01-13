import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';

// const GALLERY_IMAGES = [
//   {
//     id: 1,
//     src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800',
//     title: 'Restaurant Interior',
//   },
//   {
//     id: 2,
//     src: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800',
//     title: 'Dining Area',
//   },
//   {
//     id: 3,
//     src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800',
//     title: 'Signature Dish',
//   },
//   {
//     id: 4,
//     src: 'https://images.unsplash.com/photo-1604908554164-f34b8d93b07b?q=80&w=800',
//     title: 'Indian Thali',
//   },
//   {
//     id: 5,
//     src: 'https://images.unsplash.com/photo-1625944525533-473f1a3b7a17?q=80&w=800',
//     title: 'Chef Special',
//   },
//   {
//     id: 6,
//     src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
//     title: 'Ambience',
//   },
//   {
//     id: 7,
//     src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800',
//     title: 'Family Dining',
//   },
//   {
//     id: 8,
//     src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800',
//     title: 'Desserts',
//   },
// ];

const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/dishes/dish1.jpeg',
    title: 'dish1',
  },
  {
    id: 2,
    src: '/images/dishes/dish2.jpeg',
    title: 'dish2',
  },
  {
    id: 3,
    src: '/images/dishes/dish3.jpeg',
    title: 'dish3',
  },
  {
    id: 4,
    src: '/images/dishes/dish4.jpeg',
    title: 'dish4',
  },
  {
    id: 5,
    src: '/images/dishes/dish5.jpeg',
    title: 'dish5',
  },
  {
    id: 6,
    src: '/images/dishes/dish6.jpeg',
    title: 'dish6',
  },
  {
    id: 7,
    src: '/images/dishes/dish7.jpeg',
    title: 'dish7',
  },
  {
    id: 8,
    src: '/images/dishes/dish8.jpeg',
    title: 'dish8',
  },

  {
    id: 9,
    src: '/images/dishes/dish9.jpeg',
    title: 'dish9',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Gallery" subtitle="A Glimpse of Our World" />

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {GALLERY_IMAGES.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="text-white text-sm font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

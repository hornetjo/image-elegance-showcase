
import React, { useState } from 'react';
import Lightbox from './Lightbox';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      category: "landscape",
      title: "Ocean Waves"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      category: "landscape",
      title: "Mountain Vista"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "portrait",
      title: "Feline Grace"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      category: "wildlife",
      title: "Mountain Ox"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
      category: "wildlife",
      title: "Humpback Whale"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "portrait",
      title: "Morning Light"
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'portrait', name: 'Portrait' },
    { id: 'wildlife', name: 'Wildlife' }
  ];

  const filteredImages = currentCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-wider">
            GALLERY
          </h2>
          
          {/* Category filters */}
          <div className="flex justify-center space-x-8 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`text-lg tracking-wide transition-all duration-300 ${
                  currentCategory === category.id
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden relative aspect-square"
              onClick={() => setSelectedImage(image.src)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-light tracking-wide">
                    {image.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default Gallery;

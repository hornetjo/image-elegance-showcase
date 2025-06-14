
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-wider">
              ABOUT
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a passionate photographer dedicated to capturing the extraordinary 
                in everyday moments. With over a decade of experience, I specialize in 
                landscape, portrait, and wildlife photography.
              </p>
              <p className="text-lg">
                My work has been featured in various publications and exhibitions 
                worldwide. I believe that every photograph should tell a story and 
                evoke emotion, connecting the viewer with the subject in a meaningful way.
              </p>
              <p className="text-lg">
                When I'm not behind the lens, you can find me exploring remote locations, 
                seeking the perfect light, and constantly pushing the boundaries of 
                visual storytelling.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                ACHIEVEMENTS
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• National Geographic Featured Artist 2023</li>
                <li>• International Photography Awards Winner</li>
                <li>• Solo Exhibition at Modern Art Gallery</li>
                <li>• Published in Landscape Photography Magazine</li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Photographer portrait"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

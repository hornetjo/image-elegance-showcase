
import React, { useEffect } from 'react';

interface LightboxProps {
  image: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt="Gallery image"
          className="w-full h-full object-contain"
        />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition-colors duration-300 z-10"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Lightbox;

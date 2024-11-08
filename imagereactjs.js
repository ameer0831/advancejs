import React, { useState, useEffect } from 'react';
import './App.css';

// Custom hook for lazy loading images
const useLazyLoadImage = (src) => {
  const [isVisible, setIsVisible] = useState(false);

  const imageRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the image is in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is in the viewport
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : ''}
      alt="Lazy loaded"
      loading="lazy"
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

const App = () => {
  // Dynamically import images or define URLs for better cache control
  const images = [
    {
      src: '/images/img1.webp',
      alt: 'Image 1',
      webpSrc: '/images/img1.webp',
      jpgSrc: '/images/img1.jpg',
    },
    {
      src: '/images/img2.webp',
      alt: 'Image 2',
      webpSrc: '/images/img2.webp',
      jpgSrc: '/images/img2.jpg',
    },
    {
      src: '/images/img3.webp',
      alt: 'Image 3',
      webpSrc: '/images/img3.webp',
      jpgSrc: '/images/img3.jpg',
    },
  ];

  return (
    <div className="App">
      <h1>Optimized Images with React</h1>

      {images.map((image, index) => (
        <div key={index} className="image-container">
          <picture>
            {/* Responsive images with WebP format as primary */}
            <source srcSet={image.webpSrc} type="image/webp" />
            <source srcSet={image.jpgSrc} type="image/jpeg" />
            <useLazyLoadImage src={image.src} />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default App;

import React, { useEffect, useRef } from 'react';

const EventsGallery = () => {
  const galleryRef = useRef(null);
  
  // Sample event posters data - replace with your actual images
  const eventPosters = [
    { image: "/images/1.png", id: 0 },
    { image: "/images/2.png", id: 1 },
    { image: "/images/3.png", id: 2 },
    { image: "/images/4.png", id: 3 },
    { image: "/images/1.png", id: 4 },
    { image: "/images/1.png", id: 5 },
    { image: "/images/OIP.jpg", id: 6 },
  ];

  useEffect(() => {
    const posters = galleryRef.current?.querySelectorAll('.poster');
    const container = galleryRef.current;

    if (!posters || !container) return;

    // Add hover effects
    posters.forEach((poster, index) => {
      const handleMouseEnter = () => {
        posters.forEach((p, i) => {
          if (i === index) {
            p.style.flex = '3'; // Make the hovered poster larger
            p.style.zIndex = '2'; // Bring it to the front
          } else if (i === index - 1 || i === index + 1) {
            p.style.flex = '0.5'; // Slightly shrink the adjacent posters
            p.style.zIndex = '1'; // Keep them in front but behind the hovered one
          } else {
            p.style.flex = '0.2'; // Shrink the other posters
            p.style.zIndex = '0'; // Move them to the back
          }
        });
      };

      poster.addEventListener('mouseenter', handleMouseEnter);
    });

    const handleMouseLeave = () => {
      posters.forEach(p => {
        p.style.flex = '1'; // Reset the size of all posters
        p.style.zIndex = '0'; // Reset z-index
      });
    };

    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners
    return () => {
      posters.forEach((poster, index) => {
        poster.removeEventListener('mouseenter', () => {});
      });
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="events-organized-section">
      <h1 className="heading">
        Events Organized
      </h1>
      
      
      <div 
        ref={galleryRef}
        className="gallery-container"
        id="gallery"
      >
        {eventPosters.map((poster, index) => (
          <div
            key={poster.id}
            className="poster"
            style={{
              backgroundImage: `url(${poster.image})`,
            }}
          >
          </div>
        ))}
      </div>

      <style jsxjsx="true">{`
        .events-organized-section {
          padding: 40px 20px;
          background-color: #0d0d0d;
        }

        .heading {
          text-align: center;
          font-size: 2.5rem;
          display: block;
          width: 100%;
          font-weight: bold;
          margin-top: 0px;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding-bottom: 10px;
          margin-bottom: 0;
        }

        .subheading {
          text-align: center;
          display: block;
          width: 100%;
          margin: 0px auto;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding-bottom: 10px;
        }

        .gallery-container {
          position: relative;
          width: 90vw;
          height: 75vh;
          display: flex;
          gap: 0;
          overflow: hidden;
          margin: 0px auto;
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .poster {
          flex: 1;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          position: relative;
          border: 2px solid transparent;
        }

        .poster:hover {
          filter: brightness(1.05);
          border-color: #00ffff;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .poster-index {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          z-index: 10;
          user-select: none;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .events-organized-section {
            padding: 20px 10px;
          }

          .gallery-container {
            height: 50vh;
            width: 95vw;
          }
          
          .poster-index {
            padding: 4px 8px;
            font-size: 14px;
            top: 8px;
            left: 8px;
          }

          .heading {
            font-size: 2rem;
            margin-top: 20px;
            letter-spacing: 1px;
          }

          .subheading {
            font-size: 1.2rem;
            margin-top: 20px;
            margin-bottom: 40px;
            letter-spacing: 0.5px;
          }
        }

        @media (max-width: 480px) {
          .heading {
            font-size: 1.8rem;
          }

          .subheading {
            font-size: 1rem;
          }

          .gallery-container {
            height: 40vh;
            width: 98vw;
          }

          .poster-index {
            padding: 3px 6px;
            font-size: 12px;
            top: 6px;
            left: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default EventsGallery;

import { useEffect, useState } from "react";
import "./PromotionalBanners.css";

function PromotionalBanners() {
  const [activeSlide, setActiveSlide] = useState(0);

  const edgeBanners = [
    "Photos/mm.png",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1000&q=90",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1000&q=90",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1000&q=90",
  ];

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % edgeBanners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="promotional-section">

      {/* Raga Promotional Banner */}
      {/* <div className="raga-banner">
        <img
        //   src="/Photos/raga-banner.jpg"
          alt="Raga by Titan - Unlocked"
        />
      </div> */}

      {/* Edge Carousel */}
      <div className="edge-carousel">

        <div className="edge-image-wrapper">
          {edgeBanners.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Titan Edge Collection ${index + 1}`}
              className={`edge-image ${
                activeSlide === index ? "active" : ""
              }`}
            />
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="edge-indicators">
          {edgeBanners.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`edge-dot ${
                activeSlide === index ? "active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default PromotionalBanners;

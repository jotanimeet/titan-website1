
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Hero.css";

function Hero() {
  const slides = [
    {
      name: "Utsav",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-09/23/full/20250923164500.jpg?utm_source=chatgpt.com",
    },
    {
      name: "Your way is beautiful",
      image: "https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw3e21915a/images/promotions/titan/Bandhan/Neo_bandhan_Header.jpg?utm_source=chatgpt.com",
    },
    {
      name: "Titan Automatics",
      image: "https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw201fdddd/images/promotions/titan/Ceramic-Fusion/ceramic-fusion_1.jpg?utm_source=chatgpt.com",
    },
    {
      name: "Diver's",
      image: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwdde431ba/images/CLP/Titan_Raga/Silver-Collection/Raga_Silver_1_Edited_D.jpg?utm_source=chatgpt.com",
    },
    {
      name: "Smart",
      image: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw57978523/images/PLP_Banner/automatics_M.jpg?utm_source=chatgpt.com",
    },
    {
      name: "Bestsellers",
      image: "https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw3e21915a/images/promotions/titan/Bandhan/Neo_bandhan_Header.jpg?utm_source=chatgpt.com",
    },
    {
      name: "New Arrivals",
      image: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw4fc17f65/images/PLP_Banner/New-Arrivals-M.jpg?utm_source=chatgpt.com",
    },
    {
      name: "Clocks",
      image: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw4fc17f65/images/PLP_Banner/New-Arrivals-M.jpg?utm_source=chatgpt.com",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Automatic Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">

      {/* Main Banner */}
      <div className="hero-slider">

        <div
          className="hero-slides"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className="hero-slide" key={index}>
              <img src={slide.image} alt={slide.name} />
            </div>
          ))}
        </div>

        {/* Previous Arrow */}
        <button
          className="hero-arrow hero-prev"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={25} />
        </button>

        {/* Next Arrow */}
        <button
          className="hero-arrow hero-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={25} />
        </button>

      </div>

      {/* Eight Synchronized Navigation Tabs */}
      <div className="hero-tabs">

        {slides.map((slide, index) => (
          <button
            key={slide.name}
            className={`hero-tab ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span>{slide.name}</span>

            <div className="tab-progress">
              <div
                className="tab-progress-fill"
                key={`${currentSlide}-${index}`}
                style={{
                  animation:
                    currentSlide === index
                      ? "tabProgress 5s linear forwards"
                      : "none",
                }}
              ></div>
            </div>
          </button>
        ))}

      </div>

    </section>
  );
}

export default Hero;


import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ShopByPrice.css";

function ShopByPrice() {
  const sliderRef = useRef(null);

  const priceCategories = [
    {
      image: "/Photos/r0.png",
      title: "Under ₹2K",
    },
    {
      image: "/Photos/r1.png",
      title: "₹2K–₹3K",
    },
    {
      image: "/Photos/r2.png",
      title: "₹3K–₹5K",
    },
    {
      image: "/Photos/r3.png",
      title: "₹5K–₹10K",
    },
    {
      image: "/Photos/r1.png",
      title: "₹10K–₹25K",
    },
  ];

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="shop-price-section">

      {/* Watches for Him and Her */}
      <div className="gender-banner-container">

        <div className="gender-banner">
          <img
            src="/Photos/t3.webp"
            alt="Watches for Him"
          />
        </div>

        <div className="gender-banner">
          <img
            src="/Photos/image.png"
            alt="Watches for Her"
          />
        </div>

      </div>

      {/* Shop By Price */}
      <div className="shop-price-heading">
        <h2>SHOP BY PRICE</h2>
      </div>

      <div className="price-carousel-container">

        <button
          className="price-arrow left"
          onClick={() => scrollSlider("left")}
          aria-label="Previous price categories"
        >
          <ChevronLeft size={27} />
        </button>

        <div className="price-slider" ref={sliderRef}>
          {priceCategories.map((item, index) => (
            <div className="price-card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <button
          className="price-arrow right"
          onClick={() => scrollSlider("right")}
          aria-label="Next price categories"
        >
          <ChevronRight size={27} />
        </button>

      </div>

    </section>
  );
}

export default ShopByPrice;

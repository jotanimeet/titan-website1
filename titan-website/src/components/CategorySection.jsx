
import { ArrowRight } from "lucide-react";
import "./CategorySection.css";

const categories = [
  {
    id: 1,
    title: "Men's Watches",
    subtitle: "Bold designs. Timeless character.",
    button: "SHOP MEN",
    image:
      "Photos/w5.jpg",
    link: "#bestsellers",
  },
  {
    id: 2,
    title: "Women's Watches",
    subtitle: "Elegance in every second.",
    button: "SHOP WOMEN",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1000&q=90",
    link: "#bestsellers",
  },
  {
    id: 3,
    title: "Smart Watches",
    subtitle: "Smart technology. Modern style.",
    button: "SHOP SMART",
    image:
      "Photos/w4.webp",
    link: "#bestsellers",
  },
];

function CategorySection() {
  return (
    <section className="category-section" id="categories">

      {/* Section Heading */}
      <div className="category-heading">
        <span className="category-subtitle">
          FIND YOUR PERFECT MATCH
        </span>

        <h2>Shop By Category</h2>

        <p>
          Discover the perfect timepiece for every style and occasion.
        </p>
      </div>

      {/* Category Cards */}
      <div className="category-container">

        {categories.map((category) => (
          <div className="category-card" key={category.id}>

            {/* Category Image */}
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
              loading="lazy"
            />

            {/* Dark Overlay */}
            <div className="category-overlay"></div>

            {/* Category Content */}
            <div className="category-content">

              <h3>{category.title}</h3>

              <p>{category.subtitle}</p>

              <a href={category.link} className="category-button">
                {category.button}
                <ArrowRight size={17} />
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;

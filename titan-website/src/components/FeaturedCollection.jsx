
import { ArrowRight } from "lucide-react";
import "./FeaturedCollection.css";

const collections = [
  {
    id: 1,
    name: "Nebula",
    subtitle: "Luxury Meets Elegance",
    description: "Discover timeless designs with exquisite detailing.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85",
    link: "#nebula",
  },
  {
    id: 2,
    name: "Edge",
    subtitle: "Designed to Be Different",
    description: "Minimal designs for a modern lifestyle.",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    link: "#edge",
  },
  {
    id: 3,
    name: "Raga",
    subtitle: "Elegance in Every Detail",
    description: "Beautiful timepieces that celebrate elegance.",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85",
    link: "#raga",
  },
  {
    id: 4,
    name: "Octane",
    subtitle: "Power Your Every Moment",
    description: "Bold watches made for adventurous lifestyles.",
    image:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=900&q=85",
    link: "#octane",
  },
];

function FeaturedCollections() {
  return (
    <section className="featured-section" id="collections">

      {/* Section Heading */}
      <div className="featured-heading">
        <span className="featured-label">
          EXPLORE THE WORLD OF TITAN
        </span>

        <h2>Discover Our Collections</h2>

        <p>
          A collection for every personality, every occasion and every moment.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="featured-container">

        {collections.map((item) => (
          <div className="featured-card" key={item.id}>

            {/* Image */}
            <div className="featured-image-wrapper">
              <img
                src={item.image}
                alt={`${item.name} watch collection`}
                className="featured-image"
                loading="lazy"
              />

              <span className="featured-number">
                0{item.id}
              </span>
            </div>

            {/* Card Details */}
            <div className="featured-content">

              <span className="featured-subtitle">
                {item.subtitle}
              </span>

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <a href={item.link} className="featured-link">
                EXPLORE COLLECTION
                <ArrowRight size={17} />
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedCollections;


import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import "./BestSellers.css";

const products = [
  {
    id: 1,
    name: "Titan Classic Analog",
    category: "Men's Watch",
    price: 4995,
    oldPrice: 5995,
    rating: 4.8,
    reviews: 124,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Titan Elegant Rose Gold",
    category: "Women's Watch",
    price: 4295,
    oldPrice: 5295,
    rating: 4.7,
    reviews: 98,
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Titan Premium Chronograph",
    category: "Men's Watch",
    price: 6995,
    oldPrice: 7995,
    rating: 4.9,
    reviews: 156,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Titan Minimal Gold",
    category: "Women's Watch",
    price: 5495,
    oldPrice: 6495,
    rating: 4.6,
    reviews: 87,
    badge: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=85",
  },
];

function BestSellers() {
  const [wishlist, setWishlist] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  // Wishlist functionality
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // Add to bag functionality (local demo state)
  const addToBag = (id) => {
    setAddedItems((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  return (
    <section className="bestsellers-section" id="bestsellers">

      {/* Section Heading */}
      <div className="bestsellers-heading">
        <span className="bestsellers-label">
          HANDPICKED FOR YOU
        </span>

        <h2>Our Best Sellers</h2>

        <p>
          Explore the timepieces everyone is talking about.
        </p>
      </div>

      {/* Products Grid */}
      <div className="products-container">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            {/* Product Image */}
            <div className="product-image-wrapper">

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading="lazy"
              />

              {/* Product Badge */}
              <span className="product-badge">
                {product.badge}
              </span>

              {/* Wishlist Button */}
              <button
                className={`wishlist-button ${
                  wishlist.includes(product.id) ? "wishlisted" : ""
                }`}
                onClick={() => toggleWishlist(product.id)}
                aria-label="Toggle wishlist"
                aria-pressed={wishlist.includes(product.id)}
              >
                <Heart
                  size={20}
                  fill={
                    wishlist.includes(product.id)
                      ? "currentColor"
                      : "none"
                  }
                />
              </button>

            </div>

            {/* Product Details */}
            <div className="product-details">

              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              {/* Rating */}
              <div className="product-rating">
                <Star size={15} fill="currentColor" />
                <span>{product.rating}</span>
                <span className="review-count">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="product-price">
                <span className="current-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <span className="old-price">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>

                <span className="discount">
                  {Math.round(
                    ((product.oldPrice - product.price) /
                      product.oldPrice) *
                      100
                  )}% OFF
                </span>
              </div>

              {/* Add to Bag */}
              <button
                className={`add-to-bag ${
                  addedItems.includes(product.id) ? "added" : ""
                }`}
                onClick={() => addToBag(product.id)}
              >
                <ShoppingBag size={17} />

                {addedItems.includes(product.id)
                  ? "ADDED TO BAG"
                  : "ADD TO BAG"}
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* View All */}
      <div className="view-all-wrapper">
        <a href="#all-products" className="view-all-button">
          VIEW ALL WATCHES
        </a>
      </div>

    </section>
  );
}

export default BestSellers;

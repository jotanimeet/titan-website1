
import "./SpecialOffers.css";

function SpecialOffers() {
  return (
    <section className="special-offers">
      <div className="offer-content">
        <span className="offer-tag">LIMITED TIME OFFER</span>

        <h2>Time to Make It Special</h2>

        <p>
          Discover timeless designs and enjoy exclusive offers
          on selected Titan watches.
        </p>

        <a href="#collections" className="offer-btn">
          EXPLORE OFFERS
        </a>
      </div>

      <div className="offer-image">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000"
          alt="Premium wristwatch"
        />
      </div>
    </section>
  );
}

export default SpecialOffers;

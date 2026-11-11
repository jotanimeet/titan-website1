import "./BestWayToBuy.css";

function BestWayToBuy() {
  const categories = [
    {
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    },
    {
      name: "Women",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
    },
    {
      name: "Offer",
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=500&h=500&fit=crop",
    },
    {
      name: "Couple",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=500&fit=crop",
    },
    {
      name: "Vetra",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop",
    },
    {
      name: "Mag By Titan",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    },
    {
      name: "Smart",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=500&h=500&fit=crop",
    },
  ];

  return (
    <section className="best-way-section">
      <h2>THE BEST WAY TO BUY THE PRODUCTS YOU LOVE</h2>

      <div className="best-way-container">
        {categories.map((category) => (
          <div className="best-way-card" key={category.name}>
            <div className="best-way-image">
              <img src={category.image} alt={category.name} />
            </div>

            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestWayToBuy;
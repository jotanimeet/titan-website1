
import "./ShopByBrand.css";

function ShopByBrands() {
  const brands = [
    { name: "", image: "Photos/t1.webp" },
    { name: "", image: "Photos/t2.webp" },
    { name: "", image: "Photos/t3.webp" },
    { name: "", image: "Photos/t4.webp" },
    { name: "", image: "Photos/image.png" },
    { name: "", image: "Photos/police_Sep_d.webp" },
    { name: "", image: "Photos/xylys_Sep_d.webp" },
    { name: "", image: "Photos/zoop_Sep_d.webp" },
    { name: "", image: "Photos/collections-ducati-d.webp" },
    { name: "", image: "Photos/collections-ducati-d.webp" },
    { name: "", image: "Photos/collections-ducati-d.webp" },
    { name: "", image: "Photos/collections-ducati-d.webp" },
  ];

  return (
    <section className="brands-section">
      <h2 className="brands-heading">SHOP BY BRANDS</h2>

      <div className="brands-grid">
        {brands.map((brand) => (
          <div className="brand-card" key={brand.name}>
            <div className="brand-image">
              <img src={brand.image} alt={brand.name} />
            </div>

            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopByBrands;

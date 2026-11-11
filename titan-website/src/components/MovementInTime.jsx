
import "./MovementInTime.css";

function MovementInTime() {
  const movements = [
    {
      name: "MECHANICAL",
      image: "Photos/r1.png",
    },
    {
      name: "QUARTZ",
      image: "Photos/r2.png",
    },
    {
      name: "CHRONOGRAPH",
      image: "Photos/r3.png",
    },
    {
      name: "SMART",
      image: "Photos/r4.png",
    },
  ];

  return (
    <section className="movement-section">
      <h2 className="movement-heading">MOVEMENT IN TIME</h2>

      <div className="movement-layout">
        {/* Large Automatic Card */}
        <a href="#collections" className="movement-card automatic-card ">
          <img
            src="Photos/r0.png"
            alt="Automatic watch movement"
            className="w-full h-full"
          />
          <h3>AUTOMATIC</h3>
        </a>

        {/* Four Smaller Cards */}
        <div className="movement-small-grid">
          {movements.map((item) => (
            <a
              href="#collections"
              className="movement-card small-movement-card"
              key={item.name}
            >
              <img src={item.image} alt={`${item.name} watch movement`} />
              <h3>{item.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovementInTime;

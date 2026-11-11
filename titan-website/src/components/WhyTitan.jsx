import { Award, ShieldCheck, Clock } from "lucide-react";
import "./WhyTitan.css";

function WhyTitan() {
  const features = [
    {
      icon: <Award size={34} />,
      title: "Timeless Design",
      description:
        "Discover elegant watch designs that complement every style and occasion.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Trusted Quality",
      description:
        "Enjoy thoughtfully crafted watches designed for lasting performance.",
    },
    {
      icon: <Clock size={34} />,
      title: "Precision & Craft",
      description:
        "Experience the perfect combination of precision, innovation and craftsmanship.",
    },
  
];

  return (
    <section className="why-titan">
      <div className="why-header">
        <span>THE TITAN PROMISE</span>
        <h2>Why Choose Titan?</h2>
        <p>More than a watch. A statement of timeless style.</p>
      </div>

      <div className="why-grid">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyTitan;

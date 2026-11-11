
import { Award, RefreshCw, Truck } from "lucide-react";
import "./FooterPromo.css";

function FooterPromo() {
  const benefits = [
    {
      icon: Award,
      title: "100% ORIGINAL",
    },
    {
      icon: RefreshCw,
      title: "7 DAY RETURN",
    },
    {
      icon: Truck,
      title: "FREE SHIPPING",
    },
  ];

  return (
    <section className="footer-promo-section">

      {/* Trust Benefits */}
      <div className="trust-benefits">
        {benefits.map(({ icon: Icon, title }) => (
          <div className="trust-item" key={title}>
            <Icon size={42} strokeWidth={1.3} />
            <h3>{title}</h3>
          </div>
        ))}
      </div>

      {/* NeuCoins Login Banner */}
      <div className="neucoin-banner">
        <p>
          Login to use <span className="neucoin-symbol">N</span>
          Neucoins on this Purchase
        </p>

        <button type="button" className="neucoin-login-btn">
          LOGIN NOW
        </button>
      </div>

    </section>
  );
}

export default FooterPromo;

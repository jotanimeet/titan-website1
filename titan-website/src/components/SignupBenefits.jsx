
import { Gift, CreditCard, Zap } from "lucide-react";
import "./SignupBenefits.css";

function SignupBenefits() {
  const benefits = [
    {
      title: "10% OFF",
      subtitle: "For New User",
      icon: <Gift size={25} />,
      style: "gift",
    },
    {
      title: "Earn Neu Coins",
      subtitle: "On eligible Purchase",
      icon: <span className="neu-icon">N</span>,
      style: "neu",
    },
    {
      title: "No Cost EMI",
      subtitle: "Option",
      icon: <CreditCard size={25} />,
      style: "emi",
    },
    {
      title: "Snapmint",
      subtitle: "Buy Now Pay Later",
      icon: <Zap size={25} />,
      style: "snapmint",
    },
  ];

  return (
    <section className="signup-benefits">
      <h3>Signup & Unlock Exclusive Benefits</h3>

      <div className="signup-content">
        <div className="benefits-list">
          {benefits.map((item) => (
            <div className="benefit-item" key={item.title}>
              <div className={`benefit-icon ${item.style}`}>
                {item.icon}
              </div>

              <div className="benefit-text">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="signup-button">
          SIGN UP
        </button>
      </div>
    </section>
  );
}

export default SignupBenefits;

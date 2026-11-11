
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="titan-footer">

      {/* Main Footer */}
      <div className="footer-main">

        {/* Collections */}
        <div className="footer-column">
          <h3>COLLECTIONS</h3>
          <p>Diver's</p>
          <p>Titan Automatics</p>
          <p>Police Batman</p>
          <p>Stellar</p>
          <p>Raga Power Pearls</p>
          <p>Nebula Jewels</p>
          <p>Grandmaster</p>
          <p>Maritime</p>
        </div>

        {/* Customer Service */}
        <div className="footer-column">
          <h3>CUSTOMER SERVICE</h3>
          <p>Payment Options</p>
          <p>Track Order</p>
          <p>Encircle Program</p>
          <p>Find Titan World Stores</p>
          <p>E Warranty Registration</p>
          <p>Cookie Policy</p>
          <p>Exercise Your Rights</p>
          <p>Cookie Settings</p>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <p>1800-266-0123</p>
          <p>customercare@titan.co.in</p>
          <p>Help & Contact</p>
          <p>FAQs</p>
        </div>

        {/* About */}
        <div className="footer-column">
          <h3>ABOUT TITAN</h3>
          <p>Brand Protection</p>
          <p>Corporate</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Styled By Titan</p>
        </div>

        {/* App and Social */}
        <div className="footer-extra">
          <h3>Download Titan World App</h3>

          <div className="app-badges">
            <div className="app-badge">
              <span className="app-symbol">●</span>
              <div>
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </div>

            <div className="app-badge">
              <span className="play-symbol">▶</span>
              <div>
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </div>
            </div>
          </div>

          <h3 className="follow-heading">Follow Us With</h3>

          <div className="social-icons">
            <span>f</span>
            <span>◎</span>
            <span>𝕏</span>
            <span>▶</span>
          </div>

          <div className="footer-help">
            <p>
              Want Help? <u>Click Here</u> To Chat With Us On
              <span className="whatsapp-icon">◉</span>
            </p>
            <p>Operating Hours: 10:00AM To 10:00PM</p>
            <p>Monday To Sunday</p>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="payment-methods">
          <span className="visa">VISA</span>
          <span className="mastercard">Mastercard</span>
          <span className="paypal">PayPal</span>
          <span>AMEX</span>
          <span>Diners Club</span>
          <span>RuPay</span>
          <span>ICICI</span>
          <span>AXIS BANK</span>
        </div>

        <div className="footer-legal">
          <p>© 2026 Titan Company Limited. All Rights Reserved.</p>
          <p>
            Cyber Security Policy&nbsp; | &nbsp;
            Terms & Conditions&nbsp; | &nbsp;
            Privacy Notice&nbsp; | &nbsp;
            Wearable Privacy Policy&nbsp; | &nbsp;
            Warranty Policy
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import FeaturedCollection from "./components/FeaturedCollection";
import BestSellers from "./components/BestSellers";
import SpecialOffers from "./components/SpecialOffers";
import WhyTitan from "./components/WhyTitan";
import MovementInTime from "./components/MovementInTime";
import ShopByBrand from "./components/ShopByBrand";
import Footer from "./components/Footer";
import SignupBenefits from "./components/SignupBenefits";
import PromotionalBanners from "./components/PromotionalBanners";
import ShopByPrice from "./components/ShopByPrice";
import BestWayToBuy from "./components/BestWayToBuy";
import FooterPromo from "./components/FooterPromo";

function App() {
  return (
    <>

      <Navbar />
      <Hero />
      <SignupBenefits />
      <PromotionalBanners />
      <ShopByPrice />
      <BestWayToBuy />

      <main>
        <CategorySection />
        <FeaturedCollection />
        <BestSellers />
        <SpecialOffers />
        <WhyTitan />
        <MovementInTime />
        <ShopByBrand />
      </main>

      <FooterPromo />
      <Footer/>

    </>
  );
}

export default App;

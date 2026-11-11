
import { useState } from "react";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Gift,
  MapPin,
  Headset,
  Package,
  CircleHelp,
} from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navLinks = [
    { name: "MEN", id: "men-section" },
    { name: "WOMEN", id: "women-section" },
    { name: "OFFER", id: "offer-section" },
    { name: "VETRA", id: "vetra-section" },
    { name: "MAG BY TITAN", id: "mag-section" },
    { name: "SMART", id: "smart-section" },
    { name: "BESTSELLERS", id: "bestsellers-section" },
    { name: "COUPLE", id: "couple-section" },
    { name: "KIDS", id: "kids-section" },
    { name: "NEW ARRIVALS", id: "new-arrivals-section" },
    { name: "RAGA", id: "raga-section" },
    { name: "CLOCKS", id: "clocks-section" },
    { name: "PREMIUM", id: "premium-section" },
  ];

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const utilityLinks = [
    { label: "Track Order", icon: Package },
    { label: "Wishlist", icon: Heart },
    { label: "eGift Card", icon: Gift },
    { label: "Find A Store", icon: MapPin },
    { label: "Help & Contact", icon: Headset },
    { label: "FAQ", icon: CircleHelp },
  ];

  return (
    <header className="titan-header">

      {/* Promotional Bar */}
      <div className="titan-promo">
        Get 10% OFF on watches over ₹2499 | Use Code: NEW10
      </div>



      {/* Main Header */}
      <div className="titan-main-header">

        {/* Mobile Menu */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Titan Logo */}
        <div className="titan-logo">
          <img src="Photos/logo.svg" alt="Titan" />
        </div>

        {/* Search */}
        <div className={`titan-search ${mobileSearch ? "mobile-search-active" : ""}`}>
          <Search size={19} />
          <input
            type="text"
            placeholder="Search watches"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {/* Right Icons */}
        <div className="titan-header-icons">
          <button type="button" className="mobile-search-btn"
            onClick={() => setMobileSearch(!mobileSearch)}
            aria-label="Search">
            <Search size={21} />
          </button>

          <button type="button" className="desktop-icon">
            <UserRound size={21} />
            <span>Account</span>
          </button>

          <button type="button" className="desktop-icon">
            <Heart size={21} />
            <span>Wishlist</span>
          </button>

          <button type="button">
            <ShoppingBag size={21} />
            <span>Cart</span>
          </button>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className={`titan-category-nav ${menuOpen ? "nav-open" : ""}`}>
        {navLinks.map((link) => (
          <button
            type="button"
            key={link.id}
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </button>
        ))}

        {/* Mobile Utility Links */}
        <div className="mobile-utility-links">
          <button type="button">Login / Signup</button>
          {utilityLinks.map(({ label, icon: Icon }) => (
            <button type="button" key={label}>
              <Icon size={17} />
              {label}
            </button>
          ))}
        </div>
      </nav>

    </header>
  );
}

export default Navbar;




// import { useState } from "react";
// import {
//   Search,
//   UserRound,
//   Heart,
//   ShoppingBag,
//   Menu,
//   X,
//   ChevronDown
// } from "lucide-react";

// function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     "MEN",
//     "WOMEN",
//     "SMART WATCHES",
//     "PREMIUM",
//     "WATCHES",
//     "SALE"
//   ];

//   return (
//     <header className="w-full bg-white shadow-sm sticky top-0 z-50">

//       {/* Top Announcement */}
//       <div className="bg-black text-white text-center py-2 text-xs tracking-widest">
//         TIMELESS ELEGANCE | DISCOVER THE TITAN COLLECTION
//       </div>

//       {/* Main Navbar */}
//       <div className="w-full mx-auto px-5 lg:px-8 flex items-center justify-center">

//         <div className="h-20 flex items-center justify-evenly w-full">

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle navigation menu"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {/* Logo */}
//           <a href="/" className="flex items-center" aria-label="Titan Home">
//                 <img
//                     src="Photos/logo.svg"
//                     alt="Titan"
//                     className="w-[110px] sm:w-[124px] h-auto object-contain"
//                     />
//             </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-7">

//             {navLinks.map((link) => (
//               <a
//                 href="#collections"
//                 key={link}
//                 className="text-sm font-medium tracking-wide text-gray-700 hover:text-red-700 transition"
//               >
//                 {link}
//               </a>
//             ))}

//           </nav>

//           {/* Right Icons */}
//           <div className="flex items-center gap-4">

//             <button aria-label="Search">
//               <Search size={21} />
//             </button>

//             <button aria-label="Account" className="hidden sm:block">
//               <UserRound size={21} />
//             </button>

//             <button aria-label="Wishlist" className="hidden sm:block">
//               <Heart size={21} />
//             </button>

//             <button aria-label="Shopping bag">
//               <ShoppingBag size={21} />
//             </button>

//           </div>

//         </div>

//         {/* Mobile Navigation */}
//         {menuOpen && (
//           <nav className="lg:hidden border-t border-gray-200 py-4">

//             {navLinks.map((link) => (
//               <a
//                 href="#collections"
//                 key={link}
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center justify-between py-3 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-red-700"
//               >
//                 {link}
//                 <ChevronDown size={16} />
//               </a>
//             ))}

//           </nav>
//         )}

//       </div>

//     </header>
//   );
// }

// export default Navbar;

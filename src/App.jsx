import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function LandingPage({ onStart, onAbout }) {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <div className="logo">🌿</div>

          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Home</h2>

          <p>
            Discover beautiful indoor plants, air-purifying plants,
            succulents and decorative greenery for your home.
          </p>

          <div className="landing-actions">
            <button className="primary-button" onClick={onStart}>
              Get Started
            </button>

            <button className="secondary-button" onClick={onAbout}>
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  if (page === "plants") {
    return (
      <ProductList
        onHome={() => setPage("home")}
        onCart={() => setPage("cart")}
      />
    );
  }

  if (page === "cart") {
    return (
      <CartItem
        onHome={() => setPage("home")}
        onPlants={() => setPage("plants")}
      />
    );
  }

  if (page === "about") {
    return (
      <div>
        <nav className="navbar">
          <button
            className="brand-button"
            onClick={() => setPage("home")}
          >
            🌿 Paradise Nursery
          </button>

          <div className="nav-links">
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("plants")}>Plants</button>
            <button onClick={() => setPage("cart")}>🛒 Cart</button>
          </div>
        </nav>

        <AboutUs />
      </div>
    );
  }

  return (
    <LandingPage
      onStart={() => setPage("plants")}
      onAbout={() => setPage("about")}
    />
  );
}

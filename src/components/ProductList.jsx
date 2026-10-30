import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b1b?auto=format&fit=crop&w=600&q=80",
    description: "A hardy indoor plant known for improving indoor air quality."
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 599,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "An elegant plant with beautiful white flowers."
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 399,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
    description: "An easy-care plant perfect for indoor spaces."
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 449,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    description: "A useful succulent with distinctive fleshy leaves."
  },
  {
    id: 5,
    name: "Boston Fern",
    price: 549,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1614594575920-31b9b4c4b1d1?auto=format&fit=crop&w=600&q=80",
    description: "A lush fern that adds freshness to your room."
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 699,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80",
    description: "A tropical-looking palm for bright indoor spaces."
  },

  {
    id: 7,
    name: "Echeveria",
    price: 299,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    description: "A compact rosette succulent with layered leaves."
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 349,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A classic low-maintenance succulent."
  },
  {
    id: 9,
    name: "Haworthia",
    price: 279,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1533062618053-d51e617307ec?auto=format&fit=crop&w=600&q=80",
    description: "A small striped succulent ideal for desks."
  },
  {
    id: 10,
    name: "String of Pearls",
    price: 499,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1600697395542-ef3ee6e6b8a0?auto=format&fit=crop&w=600&q=80",
    description: "A trailing succulent perfect for hanging pots."
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    price: 319,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description: "A striking succulent with white striped leaves."
  },
  {
    id: 12,
    name: "Gasteria",
    price: 329,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1597055181300-ae90f2a4b7f2?auto=format&fit=crop&w=600&q=80",
    description: "A sturdy succulent with thick textured leaves."
  },

  {
    id: 13,
    name: "Monstera",
    price: 799,
    category: "Decorative Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594575920-31b9b4c4b1d1?auto=format&fit=crop&w=600&q=80",
    description: "A tropical statement plant with iconic split leaves."
  },
  {
    id: 14,
    name: "Calathea",
    price: 649,
    category: "Decorative Indoor Plants",
    image: "https://images.unsplash.com/photo-1597055181300-ae90f2a4b7f2?auto=format&fit=crop&w=600&q=80",
    description: "A decorative plant with beautiful patterned foliage."
  },
  {
    id: 15,
    name: "Rubber Plant",
    price: 699,
    category: "Decorative Indoor Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "Glossy leaves make this a beautiful statement plant."
  },
  {
    id: 16,
    name: "ZZ Plant",
    price: 599,
    category: "Decorative Indoor Plants",
    image: "https://images.unsplash.com/photo-1632207691148-9e9c4e4d8d0e?auto=format&fit=crop&w=600&q=80",
    description: "A stylish and low-maintenance indoor plant."
  },
  {
    id: 17,
    name: "Philodendron",
    price: 629,
    category: "Decorative Indoor Plants",
    image: "https://images.unsplash.com/photo-1616766380422-8b9a4e7d9c1e?auto=format&fit=crop&w=600&q=80",
    description: "A versatile leafy plant for indoor spaces."
  },
  {
    id: 18,
    name: "Chinese Money Plant",
    price: 429,
    category: "Decorative Indoor Plants",
    image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80",
    description: "A charming plant with round green leaves."
  }
];

export default function ProductList({ onHome, onCart }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    ...new Set(products.map(product => product.category))
  ];

  return (
    <div>
      <nav className="navbar">
        <button
          className="brand-button"
          onClick={onHome}
        >
          🌿 Paradise Nursery
        </button>

        <div className="nav-links">
          <button onClick={onHome}>
            Home
          </button>

          <button>
            Plants
          </button>

          <button
            className="cart-button"
            onClick={onCart}
          >
            🛒 Cart ({cartCount})
          </button>
        </div>
      </nav>

      <main className="products-page">
        <div className="page-heading">
          <h1>Our Plants</h1>
          <p>
            Choose your favorite plants and bring nature home.
          </p>
        </div>

        {categories.map(category => (
          <section
            className="category-section"
            key={category}
          >
            <h2>{category}</h2>

            <div className="product-grid">
              {products
                .filter(
                  product =>
                    product.category === category
                )
                .map(product => {
                  const added = cartItems.some(
                    item => item.id === product.id
                  );

                  return (
                    <article
                      className="product-card"
                      key={product.id}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="product-content">
                        <h3>{product.name}</h3>

                        <p>
                          {product.description}
                        </p>

                        <div className="product-bottom">
                          <strong>
                            ₹{product.price}
                          </strong>

                          <button
                            disabled={added}
                            onClick={() =>
                              dispatch(
                                addToCart(product)
                              )
                            }
                          >
                            {added
                              ? "Added ✓"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

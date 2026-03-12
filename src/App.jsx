import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>

      <h1>Paradise Nursery</h1>

      <Link to="/plants">
        <button>Get Started</button>
      </Link>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
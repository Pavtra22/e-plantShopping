import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {

  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (

    <div>

      <h1>Paradise Nursery</h1>

      {!showProductList && (
        <button onClick={handleGetStartedClick}>
          Get Started
        </button>
      )}

      {showProductList && <ProductList />}

    </div>
  );
}

export default App;
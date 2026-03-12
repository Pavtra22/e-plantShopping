import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const cart = useSelector(state => state.cart);

  return (
    <div>

      <Link to="/">Home</Link> | 
      <Link to="/plants">Plants</Link> | 
      <Link to="/cart">Cart ({cart.length})</Link>

    </div>
  );
}

export default Navbar;
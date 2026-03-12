import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQty,
  decreaseQty
} from "../redux/CartSlice";

import Navbar from "./Navbar";

function CartItem() {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (

    <div>

      <Navbar />

      <h2>Shopping Cart</h2>

      {cart.map(item => (

        <div key={item.id}>

          <h4>{item.name}</h4>

          <p>Price: {item.price}</p>

          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(decreaseQty(item.id))}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>

        </div>

      ))}

      <h3>Total = {total}</h3>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

    </div>

  );
}

export default CartItem;
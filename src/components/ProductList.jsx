import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [

  { id:1, name:"Aloe", price:10, category:"Indoor" },
  { id:2, name:"Snake", price:12, category:"Indoor" },
  { id:3, name:"Money", price:15, category:"Indoor" },
  { id:4, name:"Palm", price:11, category:"Indoor" },
  { id:5, name:"Fern", price:9, category:"Indoor" },
  { id:6, name:"Peace", price:13, category:"Indoor" },

  { id:7, name:"Rose", price:8, category:"Outdoor" },
  { id:8, name:"Lily", price:7, category:"Outdoor" },
  { id:9, name:"Sunflower", price:6, category:"Outdoor" },
  { id:10, name:"Jasmine", price:9, category:"Outdoor" },
  { id:11, name:"Tulip", price:10, category:"Outdoor" },
  { id:12, name:"Daisy", price:5, category:"Outdoor" },

  { id:13, name:"Tulsi", price:5, category:"Medicinal" },
  { id:14, name:"Mint", price:4, category:"Medicinal" },
  { id:15, name:"Neem", price:6, category:"Medicinal" },
  { id:16, name:"Basil", price:5, category:"Medicinal" },
  { id:17, name:"Curry", price:7, category:"Medicinal" },
  { id:18, name:"Amla", price:8, category:"Medicinal" }

];

function ProductList() {

  const dispatch = useDispatch();

  return (

    <div>

      <Navbar />

      <h2>Plants</h2>

      {plants.map(p => (

        <div key={p.id}>

          <h4>{p.name}</h4>
          <p>{p.category}</p>
          <p>${p.price}</p>

          <button onClick={() => dispatch(addItem(p))}>
            Add to Cart
          </button>

        </div>

      ))}

    </div>

  );
}

export default ProductList;
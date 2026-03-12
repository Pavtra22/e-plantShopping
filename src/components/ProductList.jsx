import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [

  // Indoor
  { id:1, name:"Aloe", price:10, category:"Indoor", img:"https://via.placeholder.com/100" },
  { id:2, name:"Snake", price:12, category:"Indoor", img:"https://via.placeholder.com/100" },
  { id:3, name:"Money", price:15, category:"Indoor", img:"https://via.placeholder.com/100" },
  { id:4, name:"Palm", price:11, category:"Indoor", img:"https://via.placeholder.com/100" },
  { id:5, name:"Fern", price:9, category:"Indoor", img:"https://via.placeholder.com/100" },
  { id:6, name:"Peace", price:13, category:"Indoor", img:"https://via.placeholder.com/100" },

  // Outdoor
  { id:7, name:"Rose", price:8, category:"Outdoor", img:"https://via.placeholder.com/100" },
  { id:8, name:"Lily", price:7, category:"Outdoor", img:"https://via.placeholder.com/100" },
  { id:9, name:"Sunflower", price:6, category:"Outdoor", img:"https://via.placeholder.com/100" },
  { id:10, name:"Jasmine", price:9, category:"Outdoor", img:"https://via.placeholder.com/100" },
  { id:11, name:"Tulip", price:10, category:"Outdoor", img:"https://via.placeholder.com/100" },
  { id:12, name:"Daisy", price:5, category:"Outdoor", img:"https://via.placeholder.com/100" },

  // Medicinal
  { id:13, name:"Tulsi", price:5, category:"Medicinal", img:"https://via.placeholder.com/100" },
  { id:14, name:"Mint", price:4, category:"Medicinal", img:"https://via.placeholder.com/100" },
  { id:15, name:"Neem", price:6, category:"Medicinal", img:"https://via.placeholder.com/100" },
  { id:16, name:"Basil", price:5, category:"Medicinal", img:"https://via.placeholder.com/100" },
  { id:17, name:"Curry", price:7, category:"Medicinal", img:"https://via.placeholder.com/100" },
  { id:18, name:"Amla", price:8, category:"Medicinal", img:"https://via.placeholder.com/100" }

];

function ProductList() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const categories = ["Indoor", "Outdoor", "Medicinal"];

  return (

    <div>

      <Navbar />

      <h2>Plant Shop</h2>

      {categories.map(cat => (

        <div key={cat}>

          <h3>{cat} Plants</h3>

          {plants
            .filter(p => p.category === cat)
            .map(p => {

              const inCart = cart.find(i => i.id === p.id);

              return (

                <div key={p.id}>

                  <img src={p.img} width="100" />

                  <h4>{p.name}</h4>

                  <p>${p.price}</p>

                  <button
                    disabled={inCart}
                    onClick={() => dispatch(addItem(p))}
                  >
                    {inCart ? "Added" : "Add to Cart"}
                  </button>

                </div>

              );

            })}

        </div>

      ))}

    </div>

  );

}

export default ProductList;
import React from "react";
import burger from "../assets/images/burger.jpg";
import legpiece from "../assets/images/legpiece.jpg";
import pasta from "../assets/images/pasta.jpg";
import pizza from "../assets/images/pizza.jpg"
import spanish from "../assets/images/spanish.jpg";

const Cart = () => {
  return (
    <div>
      <div>
        <img src={burger} alt="this is burger" />
        <br/>
        <button>Add to Cart</button>
      </div>
      <div>
        <img src={legpiece} alt="this is burger" />
        <br/>
        <button>Add to Cart</button>
      </div>
      <div>
        <img src={pasta} alt="this is burger" />
        <br/>
        <button>Add to Cart</button>
      </div>
      <div>
        <img src={pizza} alt="this is burger" />
        <br/>
        <button>Add to Cart</button>
      </div>
      <div>
        <img src={spanish} alt="this is burger" />
        <br/>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};
export default Cart;

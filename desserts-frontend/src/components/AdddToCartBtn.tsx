import { useState, useContext } from "react";
import { DessertCardProps } from "./DessertCard";

const AdddToCartBtn = (props:DessertCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const cartctx = useContext(cartctx);

  if (!cartctx) {throw new Error("CartCtx is not defined")
    
  }
  const {cart,setCart} = cartctx;

  const increase = () => {
    setQuantity(quantity + 1);
    setCart([...cart,props]);
  };
  const decrease = () => {
    setQuantity(quantity - 1);

  };

  return (
    <> {quantity === 0 ? 
        <div className="add-btn" onClick={increase}>Add to Cart</div> :
        <div className="add-btn used">        
        <button onClick={decrease}>-</button>
        {quantity}
        <button onClick={increase}>+</button>
      </div>
    }

    </>
);
};

export default AdddToCartBtn;

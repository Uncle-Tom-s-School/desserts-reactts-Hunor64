import { useState } from "react";

const AdddToCartBtn = () => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    setQuantity(quantity - 1);
  };

  return (
    <> {quantity === 0 ? 
        <div onClick={increase}>Add to Cart</div> :
        <div>        
        <button onClick={decrease}>-</button>
        {quantity}
        <button onClick={increase}>+</button>
      </div>
    }

    </>
);
};

export default AdddToCartBtn;

import { useState } from 'react';

const Cart = () => {
    const [cart,setCart] = useState([]);

  return (
    <div>
        <h2>Your Cart ({cart.length})</h2>
    </div>
  )
}


export default Cart
import { CartItemType } from "./Cart";

const CartItem = (props: CartItemType) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{props.item.name}</h3>
        <span className="quantity">{props.quantity}x</span>
        <span className="price">@ ${props.item.price}</span>
        <span className="sumPrice">${props.item.price * props.quantity}</span>
      </div>
      <button>x</button>
    </div>
  );
};

export default CartItem;

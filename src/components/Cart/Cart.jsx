import { useContext } from "react";
import "./Cart.css";
import Modals from "../UI/Modals";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const cartItemRemoveHandler=(id)=>{
    cartCtx.removeItem(id);

  }
  const cartItemAddHandler=(item)=>{
    cartCtx.addItem({...item,amount:1})
  }
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  ); 

  return (
    <Modals onClick={props.onClick}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClick}>
          Close
        </button>
        {hasItem && <button className="button">Order</button>}
      </div>
    </Modals>
  );
};

export default Cart;

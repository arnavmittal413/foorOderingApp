import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import "./HeaderCartButton.css"
import CartContext from "../../store/Cart-context"

// const HeaderCartButton= props =>{
//     const cartCtx=useContext(CartContext);
//     const numberOfCartItem=cartCtx.items.reduce((currentNum,items)=>{
//         return  currentNum+items.amount;
//     },0)
//     return <button className="button" onClick={props.onClick}>
//         <span className="icon">
//             <CartIcon />
//         </span>
//         <span>Your Cart</span>
//         <span className="badge"> {numberOfCartItem}</span>
//     </button>
// }
// export default HeaderCartButton;
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
  
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
  
    return (
      <button className='button' onClick={props.onClick}>
        <span className='icon'>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className='badge'>{numberOfCartItems}</span>
      </button>
    );
  };
  
  export default HeaderCartButton;
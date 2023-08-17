import { Context, useContext } from "react";
import "./MealsItem.css"
import MealsItemForm from "./MealsItemForm"
import CartContext from "../../../store/Cart-context"
const MealsItem=(props)=>{
     const price=`$${props.price.toFixed(2)}`
     const cartCtx=useContext(CartContext);
     const addToCartHandler=(amount)=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
     }
return (
    <li className="meal">
        <div >
            <h3>{props.name}</h3>
            <div className="description">{props.description}</div>
            <div className="price">{price}</div>
        </div>
        <div>
            <MealsItemForm onAddCart={addToCartHandler} />
        </div>
        
    </li>
);
};
export default MealsItem;


import { Fragment } from "react";
import mealImage from "../../assets/meals.jpg"
import "./Header.css"
import HeaderCartButton from "./HeaderCartButton"
const Header = props =>{
return(
    <Fragment>
        <header className="header">
            <h1>ReactMeal</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className="main-image">
            <img src={mealImage} />
        </div>
    </Fragment>
)
}
export default Header;
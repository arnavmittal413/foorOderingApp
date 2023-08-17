import Header from "./components/Layout/Header"
import { Fragment,useState } from "react";
import Meals from "./components/Meal/Meals"
import Cart from "./components/Cart/Cart"
import CartProvider from "./store/CartProvider";
function App() {
  const[showCart,setShowCart]=useState(false);
  const openCartHandler=()=>{
    setShowCart(true);
  }
  const closeCartHandler=()=>{
    setShowCart(false);
  }
  return (
    <CartProvider>
      {showCart &&<Cart onClick={closeCartHandler} />}
      <Header onShowCart={openCartHandler} ></Header>
      <Meals />
    </CartProvider>
  );
}

export default App;

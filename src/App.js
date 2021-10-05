import {useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandeler = () => {
    setCartIsShown(true);
  }

  const hideCartHandeler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandeler} />}
      <Header onShowCart={showCartHandeler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

import { BrowserRouter as Router} from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item) => {
    const tempState = {...cartItems};
    if (item.id in cartItems) {
      tempState[item.id]['quantity'] += 1; 
    } else {
      tempState[item.id] = item;
      tempState[item.id]['quantity'] = 1;
    }
    setCartItems(tempState);
  }

  const removeItemFromCart = (item) => {
    const tempState = {...cartItems};
    delete tempState[item.id];
    setCartItems(tempState);
  }

  const calculateTotalItem = () => {
    let total = 0;
    for (const item of Object.values(cartItems)) {
      total += item['quantity'];
    }
    return total;
  }

  const increaseQuantity = (itemId) => {
    const tempState = {...cartItems};
    tempState[itemId]['quantity'] += 1;
    setCartItems(tempState);
  }

  const decreaseQuantity = (itemId) => {
    const tempState = {...cartItems};
    if (tempState[itemId]['quantity'] === 1) return;
    tempState[itemId]['quantity'] -= 1;
    setCartItems(tempState);
  }

  return (
    <>
      <Router>
        <Navbar itemCounter={calculateTotalItem()}/>
        <Main 
          cartItems={cartItems}
          addToCart={addToCart}
          removeItemFromCart={removeItemFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </Router>
    </>
  );
}

export default App;
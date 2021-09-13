import Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import Navbar from "./components/Navbar.js"
import React, { useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Product from "./components/Product.js";
import Cart from "./components/Cart.js";
import Checkout from "./components/Checkout.js"

function App() {
  const [cartItems, setCartItems] = useState([])

  const addItems = (index, quantity) => {
    let currentItems = cartItems;
    currentItems.push({
      "index": index,
      "quantity": quantity
    });
    setCartItems(currentItems);
  }

  const changeQuantity = (index, operator) => {
    let currentItems = [];
    for(let i=0;i<cartItems.length;i++) {
      if (index === cartItems[i]["index"]) {
        let quantity = cartItems[i]["quantity"];
        if (quantity === 1 && operator === "subtract") {
          quantity=1;
        } else {
          quantity = (operator==="add")? quantity+1 : quantity-1;
        }
        currentItems.push({
          "index": cartItems[i]["index"],
          "quantity": quantity
        });
      } else {
        currentItems.push(cartItems[i]);
      }
    }
    setCartItems(currentItems)
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <p>Hello</p>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" render={() => <Home cartItems={cartItems} />} />
          <Route path="/shop" exact render={() => <Shop cartItems={cartItems} />} />
          <Route path="/shop/:id" render={({match}) => <Product cartItems={cartItems} match={match.params.id} addItems={addItems} />} />
          <Route path="/cart" render={() => <Cart cartItems={cartItems} emptyCart={emptyCart} changeQuantity={changeQuantity} />} />
          <Route path="/checkout" render={() => <Checkout />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

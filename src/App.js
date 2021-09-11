import Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import Navbar from "./components/Navbar.js"
import React, { useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Product from "./components/Product.js";
import Cart from "./components/Cart.js";

function App() {
  const [cartItems, setCartItems] = useState([])

  const addItems = (index, quantity) => {
    let currentItems = cartItems;
    console.log("INSIDE function "+cartItems)
    //cartItems.push([index,quantity]);
    currentItems.push([index,quantity]);
    setCartItems(currentItems);
    console.log("CHECKING "+cartItems)
  }

  return (
    <div className="App">
      <p>Hello</p>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" render={() => <Home cartItems={cartItems} />} />
          <Route path="/shop" exact render={() => <Shop cartItems={cartItems} />} />
          <Route path="/shop/:id" render={({match}) => <Product cartItems={cartItems} match={match.params.id} addItems={addItems} />} />
          <Route path="/cart" render={() => <Cart cartItems={cartItems}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

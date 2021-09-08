import Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import Navbar from "./components/Navbar.js"
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Product from "./components/Product.js";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop:id" component={Product}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

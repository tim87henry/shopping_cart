import Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import Navbar from "./components/Navbar.js"
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/shop" component={Shop}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

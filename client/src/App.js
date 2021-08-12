import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </switch>
    </BrowserRouter>
  );
}

export default App;

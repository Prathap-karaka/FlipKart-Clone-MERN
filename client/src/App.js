import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import TemplateProvider from "./theme/TemplateProvider";

function App() {
  return (
    <TemplateProvider props>
      <BrowserRouter>
        <Header />
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </switch>
      </BrowserRouter>
    </TemplateProvider>
  );
}

export default App;

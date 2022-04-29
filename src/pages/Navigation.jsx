import React from "react";
import { Switch, Route } from "react-router-dom"; 
import CartItems from "./CartItems";
import Product from "./Product";
import Message from "./Message";
import Home from "./Home";

const Navigation = () => {
  return (
    <>
      <Switch>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/cart">
          <CartItems />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
      </Switch>
    </>
  );
};

export default Navigation;

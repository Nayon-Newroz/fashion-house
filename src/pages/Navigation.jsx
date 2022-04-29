import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from "./AppBar";
import CartItems from "./CartItems";
import Product from "./Product";
import Message from "./Message";
import Home from "./Home";

const Navigation = () => {
  return (
    <Router>
      <div
        style={{
          // overflow: "hidden",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <AppBar />
      </div>

      <div style={{ marginTop: "80px" }}>
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
      </div>
    </Router>
  );
};

export default Navigation;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import AppBar from "./AppBar";
import CartItems from "./CartItems";
import Product from "./Product";
import Message from "./Message";
import Home from "./Home";
import Navigation from "./Navigation";

const Layout = () => {
  let location = useLocation();
  console.log("location.pathname", location.pathname);
  if (location.pathname === "/") {
    return (
      <>
        <Navigation />
      </>
    );
  } else {
    return (
      <>
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
          <Navigation />
        </div>
      </>
    );
  }
};

export default Layout;

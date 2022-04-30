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
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import Grid from "@mui/material/Grid";

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
            position: "sticky",
            top: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <AppBar />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Grid container>
            <Grid item xs={2.5}>
              {/* <div
                style={{
                  position: "fixed",
                  top: 100,
                  // width: "100%",
                  // zIndex: 100,
                }}
              > */}
              <Sidebar />
              {/* </div> */}
            </Grid>
            <Grid item xs={9.5}>
              <Navigation />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
};

export default Layout;

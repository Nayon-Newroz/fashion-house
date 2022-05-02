import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "./AppBar";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Layout = () => {
  const theme = useTheme();
  let location = useLocation(); 

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log("matches", matches);
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
            <Grid
              item
              xs={2.5}
              md={2.5}
              style={{ display: matches ? "none" : "" }}
            >
              <Sidebar />
            </Grid>
            <Grid item xs={12} md={9.5}>
              <Navigation />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
};

export default Layout;

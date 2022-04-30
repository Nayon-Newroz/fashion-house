import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  listItemStyle: {
    cursor: "pointer",
  },
  active: {
    color: "#ff793f",
  },
  chipActive: {
    border: "1px solid #ff793f !important",
    color: "#ff793f !important",
  },
});

export default function Sidebar() {
  const classes = useStyles();

  const [activeItem, setActiveItem] = useState("");
  const [dense, setDense] = React.useState(true);

  const [mensMenu, setMensMenu] = useState([
    { title: "Men's Short Sleeve", total: 3 },
    { title: "Men's Full Sleeve", total: 3 },
    { title: "Men's Plain T-Shirt", total: 3 },
    { title: "Men's Polo T-Shirt", total: 3 },
    { title: "Men's Sweatshirt", total: 3 },
    { title: "Men's Hoodie", total: 3 },
    { title: "Men's Jacket", total: 3 },
    { title: "Men's Trouser (Comfy)", total: 3 },
    { title: "Men's Trouser (Track)", total: 3 },
    { title: "Men's Shorts", total: 3 },
    { title: "Underwear", total: 3 },
  ]);
  const [womensMenu, setWomensMenu] = useState([
    { title: "Women's T-Shirt", total: 3 },
    { title: "Women's Trouser", total: 3 },
  ]);
  const [kidsMenu, setkidsMenu] = useState([
    { title: "Kid's Short Sleeve", total: 3 },
    { title: "Kid's Full Sleeve", total: 3 },
    { title: "Kid's Plain T-Shirt", total: 3 },
    { title: "Kid's Polo T-Shirt", total: 3 },
    { title: "Kid's Sweatshirt", total: 3 },
    { title: "Kid's Hoodie", total: 3 },
    { title: "Kid's Jacket", total: 3 },
  ]);
  const [sportsMenu, setsportsMenu] = useState([
    { title: "Football Jersey", total: 10 },
    { title: "Cricket Jersey", total: 15 },
    { title: "volleyball Jersey", total: 3 },
  ]);
  const menuData = [
    { categoryName: "Men's Clothings", category: mensMenu },
    { categoryName: "Women's Clothings", category: womensMenu },
    { categoryName: "Kid's Clothings", category: kidsMenu },
    { categoryName: "Sports Clothings", category: sportsMenu },
  ];
  return (
    <Box style={{ background: "#fff", paddingLeft: "10px" }}>
      <br />

      {menuData?.map((item, i) => (
        <>
          <Typography variant="body1" color="primary">
            {item.categoryName}
          </Typography>
          <List dense={true}>
            {item.category?.map((cat, i) => (
              <ListItem
                className={classes.listItemStyle}
                key={i}
                secondaryAction={
                  <Chip
                    label={cat.total}
                    size="small"
                    color="primary"
                    variant="outlined"
                    className={
                      activeItem === cat.title ? classes.chipActive : null
                    }
                  />
                }
                onClick={() => setActiveItem(cat.title)}
              >
                <ListItemText
                  className={activeItem === cat.title ? classes.active : null}
                  primary={cat.title}
                />
              </ListItem>
            ))}
          </List>
        </>
      ))}
    </Box>
  );
}

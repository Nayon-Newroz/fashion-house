import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { makeStyles } from "@mui/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const useStyles = makeStyles({
  listItemStyle: {
    cursor: "pointer",
  },
  active: {
    color: "#ff793f",
  },
});

export default function MyDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <br />
      <br />
      <div>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          style={{
            position: "relative",
            color: "#ff793f",
            fontWeight: 600,
            fontFamily: "Updock",
          }}
        >
          Xaama
          <IconButton
            onClick={toggleDrawer(anchor, false)}
            style={{ position: "absolute", right: 9, top: 2 }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Typography>
      </div>

      <Typography variant="body1" color="primary">
        Men's Clothings
      </Typography>
      <List dense={dense}>
        {mensMenu?.map((item, i) => (
          <ListItem
            className={classes.listItemStyle}
            key={i}
            secondaryAction={
              // <IconButton edge="end" aria-label="delete">
              //   <DeleteIcon />
              // </IconButton>
              <Chip
                label={item.total}
                size="small"
                color="primary"
                variant="outlined"
              />
            }
            onClick={() => setActiveItem(item.title)}
          >
            <ListItemText
              className={activeItem === item.title ? classes.active : null}
              primary={item.title}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" color="primary">
        Women's Clothings
      </Typography>
      <List dense={dense}>
        {womensMenu?.map((item, i) => (
          <ListItem
            className={classes.listItemStyle}
            key={i}
            secondaryAction={
              // <IconButton edge="end" aria-label="delete">
              //   <DeleteIcon />
              // </IconButton>
              <Chip
                label={item.total}
                size="small"
                color="primary"
                variant="outlined"
              />
            }
            onClick={() => setActiveItem(item.title)}
          >
            <ListItemText
              className={activeItem === item.title ? classes.active : null}
              primary={item.title}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" color="primary">
        Kid's Clothings
      </Typography>
      <List dense={dense}>
        {kidsMenu?.map((item, i) => (
          <ListItem
            className={classes.listItemStyle}
            key={i}
            secondaryAction={
              // <IconButton edge="end" aria-label="delete">
              //   <DeleteIcon />
              // </IconButton>
              <Chip
                label={item.total}
                size="small"
                color="primary"
                variant="outlined"
              />
            }
            onClick={() => setActiveItem(item.title)}
          >
            <ListItemText
              className={activeItem === item.title ? classes.active : null}
              primary={item.title}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" color="primary">
        Sport's Clothings
      </Typography>
      <List dense={dense}>
        {sportsMenu?.map((item, i) => (
          <ListItem
            className={classes.listItemStyle}
            key={i}
            secondaryAction={
              // <IconButton edge="end" aria-label="delete">
              //   <DeleteIcon />
              // </IconButton>
              <Chip
                label={item.total}
                size="small"
                color="primary"
                variant="outlined"
              />
            }
            onClick={() => setActiveItem(item.title)}
          >
            <ListItemText
              className={activeItem === item.title ? classes.active : null}
              primary={item.title}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "white", fontSize: "60px" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

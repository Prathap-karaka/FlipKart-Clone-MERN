import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";

import {
  Toolbar,
  AppBar,
  makeStyles,
  Typography,
  Box,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#2874F0",
    height: 50,
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    marginLeft: 5,
    height: 10,
  },
  container: {
    display: "flex",
    color: "#fff",
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    textDecoration: "none",
  },
});

const ToolBar = withStyles({
  root: {
    minHeight: 50,
  },
})(Toolbar);

function Header() {
  const classes = useStyles();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <Link to="/" className={classes.component}>
          <img src={logoURL} className={classes.logo} />
          <Box className={classes.container}>
            <Typography style={{ fontSize: "12px", fontStyle: "italic" }}>
              Explore <span style={{ color: "yellow" }}>Plus</span>
            </Typography>
            <img src={subURL} className={classes.subURL} />
          </Box>
        </Link>
        <SearchBar />
        <HeaderButton />
      </ToolBar>
    </AppBar>
  );
}

export default Header;

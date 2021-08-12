import React from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  login: {
    paddingLeft: "1em",
    backgroundColor: "white",
    color: "#2870f4",
    textTransform: "unset",
    fontWeight: "600",
    margin: "0 auto",
  },
  container: {
    display: "flex",
    padding: "0 1em",
    textDecoration: "none",
    color: "white",
    alignItems: "center",
  },
});

const HeaderButton = () => {
  const classes = useStyles();
  return (
    <box className={classes.container}>
      <Button variant="contained" color="primary" className={classes.login}>
        Login
      </Button>
      <box>
        <Link to="/cart" className={classes.container}>
          <Badge badgeContent={9} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <Typography style={{ marginLeft: 10, fontWeight: 600 }}>
            Cart
          </Typography>
        </Link>
      </box>
      <Typography
        style={{
          paddingLeft: 10,
          display: "flex",
          fontWeight: 600,
        }}
      >
        More
      </Typography>
    </box>
  );
};

export default HeaderButton;

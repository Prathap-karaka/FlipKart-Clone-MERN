import React, { useContext } from "react";
import { useState } from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

// components
import Login from "../user/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";

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

  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const openPopup = () => setOpen(true);

  return (
    <Box className={classes.container}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Link style={{ textDecoration: "none " }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.login}
            onClick={() => {
              openPopup();
            }}
          >
            Login
          </Button>
        </Link>
      )}

      <Typography
        style={{
          paddingLeft: 10,
          display: "flex",
          fontWeight: 600,
        }}
      >
        More
      </Typography>
      <Box>
        <Link to="/cart" className={classes.container}>
          <Badge badgeContent={9} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <Typography style={{ marginLeft: 10, fontWeight: 600 }}>
            Cart
          </Typography>
        </Link>
        <Login open={open} setOpen={setOpen} setAccount={setAccount} />
      </Box>
    </Box>
  );
};

export default HeaderButton;

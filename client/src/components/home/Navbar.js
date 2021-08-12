import React from "react";
import { navData } from "../constants/NavData";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    display: "flex",
    margin: "55px 100px",
    padding: "12px 8px",
    justifyContent: "space-between",
  },
  container: {
    textAlign: "center",
  },
  img: {
    width: 65,
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      {navData.map((data) => {
        return (
          <Box className={classes.container}>
            <img src={data.url} className={classes.img}></img>
            <Typography variant="h6" style={{ fontSize: 15, fontWeight: 600 }}>
              {data.text}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Navbar;

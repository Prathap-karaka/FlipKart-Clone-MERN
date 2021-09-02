import { Box, makeStyles, Typography, Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";

const useStyle = makeStyles({
  container: {
    display: "flex",
    backgroundColor: "#060816",
    height: "150px",
    color: "#ffffff",
    alignItems: "center",
    flexDirection: "column",
    // padding: "10px",
  },
  icons: {
    fontSize: "24px",
    color: "#ffffff",
    justifyContent: "space-evenly",
  },
});

const Footer = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Typography variant="h6">Made by prathap Karaka</Typography>
      <Box />

      <Box className={classes.icons}>
        <Link href="https://github.com/Prathap-karaka" target="__blank">
          <GitHubIcon />
        </Link>
      </Box>

      <Box className={classes.icons}>
        <Link href="https://linkedin.com/in/prathap-karaka/" target="__blank">
          <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

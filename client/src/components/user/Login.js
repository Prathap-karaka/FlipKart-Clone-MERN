import React from "react";
import {
  Dialog,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage:
      "url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png')",
    height: "70vh",
    width: "40%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 85%",
    background: "#2874f0",
  },
});

const Login = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Dialog open={open} onClick={handleClose}>
      <DialogTitle
        id="simple-dialog-title"
        className={classes.component}
        style={{ maxWidth: "none" }}
      >
        <Box className={classes.image}>Login</Box>
        <Box></Box>
      </DialogTitle>
    </Dialog>
  );
};

export default Login;

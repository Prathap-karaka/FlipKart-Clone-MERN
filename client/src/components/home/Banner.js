import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData, navData } from "../constants/NavData";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  main: {
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Carousel
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            color: "#494949",
            backgroundColor: "#FFFFFF",
            borderRadius: 0,
            margin: 0,
            width: 50,
          },
        }}
      >
        {bannerData.map((images) => (
          <img src={images} className={classes.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

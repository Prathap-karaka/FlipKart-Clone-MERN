import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box, makeStyles } from "@material-ui/core";
import Brands from "./Brands";

const useStyle = makeStyles({
  component: {
    padding: 10,
    margin: "0 auto",
    background: "#F2F2F2",
    display: "flex",
  },
  slides: {
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
});

const Home = () => {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <div>
      <Navbar />
      <Banner />
      <Box className={classes.component}>
        <Box style={{ width: "80%" }}>
          <Slide timer={true} title="Deals of the day" />
        </Box>
        <img
          src={adURL}
          alt="ad"
          style={{
            width: "20%",
            height: "268px",
            marginLeft: "10px",
            backgroundColor: "#fff",
            padding: "8px",
          }}
        />
      </Box>

      <Box className={classes.slides}>
        <Slide timer={false} title="New stocks" />
      </Box>

      <Box className={classes.slides}>
        <Slide timer={false} title="Suggested for you" />
      </Box>
      <Box className={classes.slides}>
        <Slide timer={false} title="Best Quality" />
      </Box>
      <Box className={classes.slides}>
        <Slide timer={false} title="Recomended for you" />
      </Box>
    </div>
  );
};

export default Home;

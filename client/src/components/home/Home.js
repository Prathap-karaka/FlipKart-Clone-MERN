import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box } from "@material-ui/core";
const Home = () => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <div>
      <Navbar />
      <Banner />
      <Box style={{ display: "flex", width: "100%" }}>
        <Box style={{ width: "80%" }}>
          <Slide />
        </Box>
        <img
          src={adURL}
          alt="ad"
          style={{ width: "250px", height: "300px", margin: "10px" }}
        />
      </Box>
    </div>
  );
};

export default Home;

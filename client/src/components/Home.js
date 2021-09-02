import { Box, makeStyles } from "@material-ui/core";
import NavBar from "./Home/NarBar";
import Banner from "./Home/Banner";
import MidSlide from "./Home/MidSlide";
import Brands from "./Home/Brands";
import Slide from "./Home/Slide";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../redux/actions/productActions";
import Footer from "./Home/Footer";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

const Home = () => {
  const classes = useStyle();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, error } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <MidSlide products={products} />
        <Brands />
        <Slide
          data={products}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Suggested Items"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Top Selection"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
        <Footer />
      </Box>
    </>
  );
};

export default Home;

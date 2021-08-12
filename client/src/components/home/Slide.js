import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  makeStyles,
  Typography,
  Box,
  Button,
  Divider,
} from "@material-ui/core";
import { products } from "../constants/NavData";
import Countdown from "react-countdown";
import { style } from "@material-ui/system";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyles = makeStyles((theme) => ({
  img: {
    height: 140,
    width: 140,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  conatiner: {
    margin: 1,
  },
  deals: {
    margin: 10,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
    backgroundColor: "2874f0",
    borderRadius: 2,
  },
  component: {
    backgroundColor: "#fff",
    padding: 2,
  },
}));

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <span>
      {hours}:{minutes}:{seconds} Left
    </span>
  );
};

const Slide = ({ timer, title }) => {
  const classes = useStyles();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  return (
    <Box className={classes.component}>
      <Box className={classes.deals}>
        <Box> {title}</Box>
        {timer && (
          <>
            <img
              src={timerURL}
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            />
            <Countdown date={Date.now() + 3.24e7} renderer={renderer} />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              View All
            </Button>
          </>
        )}
      </Box>
      <Divider />

      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className={classes.conatiner}
      >
        {products.map((product) => (
          <Box>
            <img src={product.url} className={classes.img} />
            <Typography
              className={classes.text}
              style={{ fontWeight: 600, color: "#212121" }}
            >
              {product.title.shortTitle}
            </Typography>
            <Typography className={classes.text} style={{ color: "green" }}>
              {product.discount}
            </Typography>
            <Typography
              className={classes.text}
              style={{ color: "#212121", opacity: ".6" }}
            >
              {product.tagline}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;

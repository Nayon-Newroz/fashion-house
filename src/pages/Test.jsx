import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageZoom from "react-image-zoom";
import Desktop from "../assets/images/Desktop.jpg";
import { makeStyles } from "@mui/styles";

import mydata from "./Data";
const useStyles = makeStyles((theme) => ({
  sliderStyle: {
    "& .slick-dots": {
      bottom: "-70px !important",
    },
    "& .slick-dots li": {
      width: "60px !important",
      height: "60px !important",
    },
  },
  thumbleImageStyle: {
    width: "60px",
    height: "60px",
  },
  imgStyle: {
    width: "350px",
    height: "350px",
    margin: "auto",
  },
}));
const Test = () => {
  const classes = useStyles();
  const images = mydata[0].img;
  console.log("images", images);
  const settings = {
    customPaging: function (i) {
      console.log("i", i);
      return (
        <a>
          {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
          <img
            src={images[i]}
            className={classes.thumbleImageStyle}
            style={{ border: "1px solid red" }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //   const settings = () => {};
  return (
    <div>
      <div style={{ width: "400px", margin: "50px auto" }}>
        Testing slider
        <Slider {...settings} className={classes.sliderStyle}>
          {images.map((item, i) => (
            <div key={i}>
              <img src={item} className={classes.imgStyle} />
              <ReactImageZoom
                width={400}
                height={250}
                zoomWidth={500}
                img={item}
                offset={{ vertical: 0, horizontal: 0 }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Test;

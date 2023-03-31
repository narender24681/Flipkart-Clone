import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Banners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const bannerUrls = [
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/c38b4036d90d6d0e.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/bdef343421b6987d.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/9be53b0f471a35b6.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/112b0206a861accc.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/75a15c3e19c3f7de.jpg?q=50",
  ];

  return (
    <Center>
      <Box mt={4} w="100%">
        <Slider {...settings}>
          {bannerUrls.map((el, i) =>
            <img key={i} objectfit="contain" src={el} alt="" />
          )}
        </Slider>
      </Box>
    </Center>
  )
}

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style, marginLeft: "30px", zIndex: "1", backgroundColor: "lightGrey", borderRadius: "50%", paddingLeft: "0.3px", paddingTop: "1px" }} onClick={onClick} />
  )
}

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style, marginRight: "30px", backgroundColor: "lightGrey", borderRadius: "50%", paddingLeft: "0.3px", paddingTop: "1px" }} onClick={onClick} />
  )
}

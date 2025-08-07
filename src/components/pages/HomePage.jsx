import React from "react";
import events_dojos_button from "../imgs/buttons/events_dojos_button.png";
import inventory_button from "../imgs/buttons/inventory_button.png";
import quick_match_button from "../imgs/buttons/quick_match_button.png";
import ranked_match_button from "../imgs/buttons/ranked_match_button.png";
import shop_deals_button from "../imgs/buttons/shop_deals_button.png";
import heaven_pack_carousel from "../imgs/carousel/heaven_pack_carousel.png";
import void_pack_carousel from "../imgs/carousel/void_pack_carousel.png";
import gear_set_one_carousel from "../imgs/carousel/gear_set_one_carousel.png";
import main_image from "../imgs/main/main_image.png";
import main_title from "../imgs/main/main_title.png";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="flex flex-col  w-full bg-gradient-to-b from-[#4d65b4] via-[#4d9be6] to-[#8fd3ff] min-h-screen">
      <img src={main_title} className="self-center mt-5 w-170" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-10 my-auto *:hover:scale-115 *:transition-all *:duration-300 *:hover:ml-10 w-1/5 *:w-60 *:cursor-pointer">
          <img src={quick_match_button} />
          <img src={ranked_match_button} />
          <img src={shop_deals_button} />
          <img src={events_dojos_button} />
          <img src={inventory_button} />
        </div>
        <div className="flex flex-col items-center justify-center w-2/5">
          <img src={main_image} className="h-110" />
        </div>
        <div className="flex flex-col items-center justify-center w-1/5 -translate-y-10">
          <h3 className="text-center text-3xl text-white">What's Going On</h3>
          <Slider {...settings} className="w-full mt-5">
            <img src={heaven_pack_carousel} className="w-full" />
            <img src={void_pack_carousel} className="w-full" />
            <img src={gear_set_one_carousel} className="w-full" />
          </Slider>
        </div>
      </div>
      <Marquee
        autoFill={true}
        className="w-full h-20 bg-[#252525] mt-auto text-white border-t-4 border-white"
      >
        <h3 className="text-3xl uppercase w-100">All new packs out!</h3>
      </Marquee>
    </div>
  );
};

export default HomePage;

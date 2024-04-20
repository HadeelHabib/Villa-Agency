"use client";

import { IMAGES } from "@/utils/images";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <Image
          className="block w-full border border-light h-[90vh] object-cover"
          src={IMAGES.banner1}
          alt="First slide"
        />
        <Carousel.Caption className="w-[50%] !text-left mb-[10%]">
          <span className="bg-[#fff] text-[#1e1e1e] text-[16px] font-[500] p-1">
            Toronto, <em className="text-[#f35525] font-normal">Canada</em>
          </span>
          <h2 className="md:text-[62px] text-[42px] font-bold text-white leading-[72px]">
            HURRY !
            <br />
            GET THE BEST
            <br /> VILLA
            <br /> FOR YOU
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="block w-full border border-light h-[90vh] object-cover"
          src={IMAGES.banner2}
          alt="Second slide"
        />
        <Carousel.Caption className="w-[50%] !text-left mb-[10%]">
          <span className="bg-[#fff] text-[#1e1e1e] text-[16px] font-[500] p-1">
            Melbourne,<em className="text-[#f35525] font-normal"> Australia</em>
          </span>
          <h2 className="md:text-[62px] text-[42px] font-bold text-white leading-[72px]">
            BE QUIQ!
            <br />
            GET TE BEST
            <br /> VILLA IN TOWN
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="block w-full border border-light h-[90vh] object-cover"
          src={IMAGES.banner3}
          alt="Third slide"
        />
        <Carousel.Caption className="w-[50%] !text-left mb-[10%]">
          <span className="bg-[#fff] text-[#1e1e1e] text-[16px] font-[500] p-1">
            Miami,<em className="text-[#f35525] font-normal"> South Florida</em>
          </span>
          <h2 className="md:text-[62px] text-[42px] font-bold text-white leading-[72px]">
            ACT NOW
            <br />
            GET THE
            <br /> HIGHEST LEVEL
            <br /> PENTHOUSE
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;

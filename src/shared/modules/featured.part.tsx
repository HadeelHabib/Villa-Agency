import { IMAGES } from "@/utils/images";
import Image from "next/image";
import React from "react";
import AccordionItems from "@/shared/components/accordion/accourdion" 
import Features from "../components/features/features";
const Featured = () => {
  return (
    <div className="md:w-[80%] md:flex m-auto justify-between my-4">
      <div className="md:w-[25%] w-[80%] m-auto">
        <Image
          src={IMAGES.featuredIco}
          alt=""
          className="bg-[#f35525] text-center w-[110px] h-[110px] p-4  leading-8 absolute translate-y-[420px] rounded-[50%] translate-x-[-35px]"
        />
        <Image className="w-full h-[500px]" src={IMAGES.features} alt="" />
      </div>
      <div className="md:w-[40%] w-[90%] mx-auto mt-5">
        <h5 className="title">FEATURED</h5>
        <h2 className="subtitle">
          Best Appartment <br />& Sea View
        </h2>
        <div className="mx-auto">
          <AccordionItems />
        </div>
      </div>
      <div className="md:w-[30%]">
        <Features/>
      </div>
    </div>
  );
};

export default Featured;

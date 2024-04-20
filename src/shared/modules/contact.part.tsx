import { IMAGES } from "@/utils/images";
import Image from "next/image";
import React from "react";
import Map from "../components/map/map";
import Input from "@/shared/components/form/form";
import Card from "../components/cards/contact.card";
const Contact = () => {
  return (
    <div>
      <Image
        src={IMAGES.contact}
        alt=""
        className=" w-full md:h-[650px] h-[250px]"
      />
      <div className="text-center">
        <div className="relative md:top-[-500px] top-[-220px] ">
          <h5 className="title border-0">| CONTACT US</h5>
          <h2 className="md:font-[700] !text-[#fff] md:text-[40px] md:leading-[56px]">
            Get In Touch With <br /> Our Agents
          </h2>
        </div>
      </div>
      <div className="md:flex justify-between w-[85%] m-auto relative md:top-[-400px] top-[-200px]">
        <div className="md:w-[55%]">
          <Map />
          <div className="mt-7 w-full md:flex items-center justify-between">
            <Card img={IMAGES.phone} title="010-020-0340" subtitle="Phone Number"/>
            <Card img={IMAGES.email} title="info@villa.co" subtitle="Business Email"/>
          </div>
        </div>
        <div className="md:w-[40%] md:mt-0 mt-[20%]">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Contact;

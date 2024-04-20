import { IMAGES } from "@/utils/images";
import Image from "next/image";
import React from "react";

const Intro: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image
          src={IMAGES.heading}
          alt=""
          className="w-[100%] md:h-[350px] h-[80vh] object-cover"
        />
        <div className="property-intro !text-center absolute top-[250px] !align-middle">
          <span>{title}</span>
          <h5 className="">{subtitle}</h5>
        </div>
      </div>
    </div>
  );
};

export default Intro;

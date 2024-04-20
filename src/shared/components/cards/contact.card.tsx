import Image from "next/image";
import React from "react";

const Card: React.FC<InfoProps> = ({ img, title, subtitle, isContact }) => {
  return (
    <div
      className={`flex ${
        isContact ? "md:w-[60%]" : "md:w-[47%]"
      }  w-[95%] p-9 rounded-[10px] h-[110px] shadow-md items-center`}
    >
      <Image src={img} alt="" />
      <div className="ml-6">
        <h4 className="">{title}</h4>
        <span className="opacity-70">{subtitle}</span>
      </div>
    </div>
  );
};

export default Card;

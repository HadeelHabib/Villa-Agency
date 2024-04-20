import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card: React.FC<CardProps> = ({
  img,
  type,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  floor,
  parking,
}) => {
  return (
    <div className="W-full bg-[#fafafa] rounded-[10px] p-[20px]">
      <Link href={"/live/templatemo_591_villa_agency"}>
        <Image
          src={img}
          alt=""
          className="rounded-[15px] overflow-hidden w-full"
        />
      </Link>
      <div className="py-6">
        <div className="w-full">
          <div className="flex items-start text justify-between w-[90%] m-auto">
            <span className="bg-[#fbd9cf] p-2 font-[500] rounded-[5px] text-[14px]">
              {type}
            </span>
            <h2 className=" text-[#f35525] inline-block text-[19px] font-Poppins font-bold">
              {price}
            </h2>
          </div>
          <h1 className="w-[95%] text-[19px] my-[25px] mr-[20%] font-Poppins font-bold ">
            {location}
          </h1>
          <div className="">
            <ul>
              <li>
                Bedrooms: <span>{bedrooms}</span>
              </li>
              <li>
                Bathrooms: <span>{bathrooms}</span>
              </li>
              <li>
                Area: <span>{area}</span>
              </li>
              <li>
                Floor: <span>{floor}</span>
              </li>
              <li>
                Parking: <span>{parking}</span>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <button className="schedule-style !px-4 mt-3">
              Schedule a visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

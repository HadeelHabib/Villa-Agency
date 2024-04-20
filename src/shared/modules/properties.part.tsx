import React from "react";
import Card from "../components/cards/features.card";
import { cardItems } from "@/configs/constant";

const Properties = () => {
  return (
    <div className="my-[5%]">
      <div className="text-center">
        <h5 className="title border-0">| properties</h5>
        <h2 className="md:font-[700] md:text-[40px] md:leading-[56px]">
          We Provide The Best <br /> Property You Like
        </h2>
        <div className="w-[90%] m-auto gap-4 grid md:grid-cols-3 sm:grid-cols-2">
          {cardItems.map((i: CardItem, index: number) => (
            <div className="" key={index}>
              <Card
                img={i.img}
                type={i.type}
                price={i.price}
                location={i.location}
                bedrooms={i.bedrooms}
                bathrooms={i.bathrooms}
                area={i.area}
                floor={i.floor}
                parking={i.parking}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;

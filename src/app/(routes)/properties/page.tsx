"use client";
import { cardItems, cardItems2, cardItems3, cardItems4 } from "@/configs/constant";
import Card from "@/shared/components/cards/features.card";
import Intro from "@/shared/components/properties.intro/properties.intro";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Page = () => {
  const [Active, setActive] = useState(1);
  return (
    <div id="top" className="w-full">
      <Intro title="HOME / PROPERTIES" subtitle="PROPERTIES" />
      <div className="md:flex md:items-center md:justify-center my-[10%] w-[90%] mx-auto grid grid-cols-2 gap-1">
        <Button
          onClick={() => setActive(1)}
          className={`button-style mx-2 ${Active === 1 ? "!bg-[#f35525]" : "" }`}
        >
          Show All
        </Button>
        <Button
          onClick={() => setActive(2)}
          className={`button-style mx-2 ${Active === 2 ? "!bg-[#f35525]" : "" }`}
        >
          Appartment
        </Button>
        <Button
          onClick={() => setActive(3)}
          className={`button-style mx-2 ${Active === 3 ? "!bg-[#f35525]" : "" }`}
        >
          Villa House
        </Button>
        <Button
          onClick={() => setActive(4)}
          className={`button-style mx-2 ${Active === 4 ? "!bg-[#f35525]" : "" }`}
        >
          Penthouse
        </Button>
      </div>
     
      <div className="w-[90%] m-auto gap-4 grid md:grid-cols-3 sm:grid-cols-2 ">
        {(Active === 1 )? (
          cardItems.map((i: CardItem, index: number) => (
            <div className="duration-75 ease-in" key={index}>
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
          ))
        ):""}
                {(Active === 2 )? (
          cardItems2.map((i: CardItem, index: number) => (
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
          ))
        ):""}
                {(Active === 3 )? (
          cardItems3.map((i: CardItem, index: number) => (
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
          ))
        ):""}
                {(Active === 4 )? (
          cardItems4.map((i: CardItem, index: number) => (
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
          ))
        ):""}
        </div>
      <div className="flex justify-center text-center">
        <a href="#top" className={`link-style ${Active === 1 ? "!bg-[#f35525]" : "" }`}>
          1
        </a>
        <a href="#top" className={`link-style ${Active === 2 ? "!bg-[#f35525]" : "" }`}>
          2
        </a>
        <a href="#top" className={`link-style ${Active === 3 ? "!bg-[#f35525]" : "" }`}>
          3
        </a>
        <a href="#top" className={`link-style ${Active === 4 ? "!bg-[#f35525]" : "" }`}>&#xBB;</a>
      </div>
    </div>
  );
};

export default Page;

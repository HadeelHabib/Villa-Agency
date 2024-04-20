'use client'
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import {bestItems} from "@/configs/constant"

const BestDeal = () => {

    const [Active, setActive] = useState(1);

  return (
    <div className="w-full my-[20%] bg-[#f5f5f5] py-20">
      <div className="w-[85%] m-auto md:flex justify-between">
        <div className="">
          <h5 className="title">Best Deal</h5>
          <h2 className="subtitle">
            Find your Best Deal
            <br /> Right Now!
          </h2>
        </div>
        <div className="">
          <div className="md:flex gap-3 md:mt-[20%] grid grid-cols3">
            <Button onClick={()=>setActive(1)} className={`button-style ${Active === 1?"!bg-[#f35525]":""}`}>Appartment</Button>
            <Button onClick={()=>setActive(2)} className={`button-style ${Active === 2?"!bg-[#f35525]":""}`}>Villa House</Button>
            <Button onClick={()=>setActive(3)} className={`button-style ${Active === 3?"!bg-[#f35525]":""}`}>Penthouse</Button>
          </div>
        </div>
      </div>
            {bestItems.map((i:BestItem,index:number)=>(
                <>
                {Active === i.id && (
      <div key={index} className="mt-[5%] md:w-[85%]  mx-auto md:flex w-[90%]">
            {i.features.map((e:Details,index:number)=>(
        <div key={index} className="md:w-[30%] mt-0 my-4">
          <div className="bg-[#fff]  w-[90%] shadow-lg p-9 rounded-[10px]   ">
            <div className="   pt-[10px] border-b border-b-[#0000000d] py-[10px]">
              <div className=" flex justify-between">
                <span className="opacity-70">Total Flat Space</span>
                <h2 className="text-[20px] font-[700]">{e.flatSpace}</h2>
              </div>
            </div>
            <div className="border-b border-b-[#0000000d] py-[15px]">
              <div className="flex justify-between">
                <span className="opacity-70">Floor number</span>
                <h2 className="text-[20px] font-[700]">{e.floorNumber}</h2>
              </div>
            </div>
            <div className="border-b border-b-[#0000000d] py-[15px]">
              <div className="flex justify-between">
                <span className="opacity-70">Number of rooms</span>
                <h2 className="text-[20px] font-[700]">{e.roomsNumber}</h2>
              </div>
            </div>
            <div className="border-b border-b-[#0000000d] py-[15px]">
              <div className="flex justify-between">
                <span className="opacity-70"> parking Available</span>
                <h2 className="text-[20px] font-[700]">{e.parking}</h2>
              </div>
            </div>
            <div className="pt-[10px]">
              <div className=" flex justify-between">
                <span className="opacity-70"> Payment process</span>
                <h2 className="text-[20px] font-[700]">{e.payment}</h2>
              </div>
            </div>
          </div>
        </div>
       )) }
        <div className="md:w-[45%] md:mx-12 md:my-0 m-[5%] ">
          <Image className="w-full" src={i.img} alt="" />
        </div>
        <div className=" md:w-[25%] ml-6">
          <h4 className="text-[17px] font-[600]">{i.title}</h4>
          <br />
          <p className="text-[14px] leading-[28px] text-[#4a4a4a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
            tempor pack incididunt ut labore et dolore magna aliqua quised ipsum
            suspendisse.
            <br />
            <br />
            Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents
            typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after
            messenger poutine next level humblebrag swag franzen.
          </p>
          <div className="w-24">
            <span className="fa fa-calendar button-img" />
            <Button className="schedule-style">Schedule a visit</Button>
          </div>
        </div>
      </div>
      
     )}
  
  </>))}
    </div>
  );
};

export default BestDeal;

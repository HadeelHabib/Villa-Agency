import { IMAGES } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const View = () => {
  return (
    <div className="md:mb-[-100px] my-[10%]">
      <Image
        src={IMAGES.videobg}
        alt=""
        className=" w-full md:h-[600px] h-[250px]"
      />
      <div className="text-center ">
        <div className=" relative md:top-[-500px] top-[-220px]">
          <h5 className="title border-0">| VIDEO VIEW</h5>
          <h2 className="md:font-[700] !text-[#fff] md:text-[40px] md:leading-[56px]">
            Get Closer View & <br /> Different Feeling
          </h2>

          <Image
            src={IMAGES.videofr}
            alt=""
            className="rounded-lg md:w-[70%] w-[85%] m-auto relative md:top-[100px] top-[40px]"
          />
          <Link
            className="link md:relative top-[-60px]  md:top-[-10rem] "
            href="https://youtube.com"
          >
            <i className="fa fa-play" />
          </Link>
        </div>

        <div className=" lg:flex justify-between md:w-[85%] mx-auto mt-[-20%]">
          <div className="custom-style">
            <h2>34</h2>
            <p>
              Buldings
              <br />
              Finished Now
            </p>
          </div>
          <div className="custom-style">
            <h2>12</h2>
            <p>
              Years
              <br />
              Experience
            </p>
          </div>
          <div className="custom-style">
            <h2>24</h2>
            <p>
              Awwards
              <br />
              Won 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;

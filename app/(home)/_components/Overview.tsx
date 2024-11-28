import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

const Overview = () => {
  return (
    <div className="bg-white h-auto mx-auto w-full max-w-7xl py-10 flex flex-col">
      <div className="flex flex-row justify-center items-center w-full mx-auto  gap-4 ">
        <div
          className="w-1/2 text-left flex flex-col h-full  gap-8
        "
        >
          <h2 className="text-4xl text-[#243765] font-semibold">
            No One Cools Data Centers Like GRC
          </h2>
          <p className="text-black text-xl">
            That’s the cold truth. No other company has the history, global
            presence or expertise in liquid immersion cooling that we do. GRC
            has been breaking through limitations and setting new standards of
            data center cooling and efficiency for over a decade, providing
            patented technology that increases performance, enhances
            sustainability, and optimizes TCO.
          </p>
          <button className="flex ">
            Learn More <ArrowUpRight className="inline" />
          </button>
        </div>
        <div className="w-1/2 bg-black">
          <img
            src="https://www.grcooling.com/wp-content/uploads/shutterstock-2256246595_9d906fb88d6058c9b3b71d9f5decafd7_2000.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
// components/ExpertiseSkeleton.js
import React from "react";
import Skeleton from "react-loading-skeleton";

const ExpertiseSkeleton = () => {
  const skeletonItems = Array.from({ length: 3 }).map((_, index) => (
    <div
      key={index}
      className="flex flex-col h-auto w-full md:w-1/2 border-white border-4 rounded-lg md:border-6 p-5 mb-5 md:m-5 items-center"
    >
      <div className="flex flex-row align-middle items-center">
        <Skeleton
          circle={true}
          height={45}
          width={45}
          className="max-h-[45px] max-w-[45px]"
        />
        <Skeleton
          height={40}
          width={150}
          className="text-[#c3c4c7] text-3xl text-center p-6 font-['Merriweather'] font-medium"
        />
      </div>
      <Skeleton
        count={3}
        height={20}
        width="80%"
        className="text-[#c3c4c7] text-lg md:text-2xl font-['Roboto Slab'] font-normal"
      />
    </div>
  ));

  return (
    <section className="">
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl pb-5 m-24 md:text-6xl text-[#c3c4c7] font-['Merriweather']">
          My expertise
        </h1>
        <div className="flex flex-col md:flex-row first-letter:p-5">
          {skeletonItems}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSkeleton;

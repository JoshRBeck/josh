"use client";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import ExpertiseSkeleton from "../components/ExpertiseSkeleton";

interface ExpertiseStructure {
  logoSrc: StaticImageData;
  title: string;
  description: string;
}

interface ExpertiseProps {
  items: ExpertiseStructure[];
}

const Expertise: React.FC<ExpertiseProps> = ({ items }) => {
  useEffect(() => {}, []);

  if (!items) {
    return <ExpertiseSkeleton />;
  }

  return (
    <section className="">
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl pb-5 m-24 md:text-6xl text-[#c3c4c7] font-['Merriweather']">
          My Expertise
        </h1>
        <div className="flex flex-col md:flex-row first-letter:p-5">
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col h-auto w-full md:w-1/2 border-white border-4 rounded-lg md:border-6 p-5 mb-5 md:m-5 items-center"
              >
                <div className="flex flex-row align-middle items-center">
                  <Image
                    src={item.logoSrc}
                    alt={`${item.title} Logo`}
                    className="max-h-[45px] max-w-[45px]"
                    width={45}
                    height={45}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <h2 className="text-[#c3c4c7] text-3xl text-center p-6 font-['Merriweather'] font-medium">
                    {item.title}
                  </h2>
                </div>
                <p className="text-[#c3c4c7] text-lg md:text-xl font-['Merriweather'] font-normal">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

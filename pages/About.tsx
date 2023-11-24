import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface AboutStructure {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

interface AboutProps {
  items: AboutStructure[];
}

const About: React.FC<AboutProps> = ({ items }) => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-[#c3c4c7] font-['Bebas']">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row">
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center mb-8 p-5"
              >
                <div className="mb-4 md:1/2 h-auto flex items-center md:mr-8 md:mb-0">
                  <Image
                    src={item.imageSrc}
                    width={300}
                    height={200}
                    alt={`${item.title} Logo`}
                    className="rounded-xl border-4 border-gray-200"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
                <div className="flex flex-col md:w-1/2 h-auto items-center">
                  <h2 className="text-2xl md:text-3xl font-[Bebas] text-[#c3c4c7]">
                    {item.title}
                  </h2>
                  <p className="text-lg text-center font-[Bebas] text-[#c3c4c7]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import Image, { StaticImageData } from "next/image";
import React from "react";

interface ContactStructure {
  iconSrc: StaticImageData;
  title: string;
}

interface ContactProps {
  items: ContactStructure[];
}

const ContactJosh: React.FC<ContactProps> = ({ items }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center pb-10">
        <h1 className="text-4xl pb-5 md:text-6xl text-[#c3c4c7] font-['Bebas']">
          Contact Me
        </h1>
        <div className="flex flex-col px-5 w-full md:flex-row items-center ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row mx-4 py-2 border-white border-4 rounded-lg  justify-center items-center mb-4 md:mb-0 w-full md:w-[33.333%]"
            >
              <Image
                src={item.iconSrc}
                alt={item.title}
                width={45}
                height={45}
                className="mb-2 md:mr-2 md:mb-0"
              />
              <h2 className="text-[#c3c4c7] text-lg md:text-3xl font-['Bebas']">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactJosh;

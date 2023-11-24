import Image, { StaticImageData } from "next/legacy/image";
import React, { ReactNode } from "react";
import Link from "next/link";

interface ContactStructure {
  iconSrc: StaticImageData;
  title: string;
  link: string;
}

interface ContactProps {
  items: ContactStructure[];
}

const ContactLink: React.FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => <Link href={href}>{children}</Link>;

const ContactJosh: React.FC<ContactProps> = ({ items }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center pb-10">
        <h1 className="text-4xl pb-5 md:text-6xl text-[#c3c4c7] font-['Bebas']">
          Contact Me
        </h1>
        <div className="flex flex-col px-5 w-full md:flex-row items-center ">
          {items &&
            items.map((item, index) => (
              <ContactLink key={index} href={item.link}>
                <div className="flex flex-col md:flex-row mx-4 py-2 border-white border-4 rounded-lg justify-center items-center mb-4 md:mb-0 w-full md:w-[33.333%]">
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
              </ContactLink>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ContactJosh;

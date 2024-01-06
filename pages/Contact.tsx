import Image, { StaticImageData } from "next/image";
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
}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

const ContactJosh: React.FC<ContactProps> = ({ items }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center pb-10">
        <h1 className="text-4xl pb-5 m-16 md:text-6xl text-[#c3c4c7] font-['Merriweather']">
          Contact Me
        </h1>
        <div className="w-full p-10 flex flex-col justify-around">
          {items &&
            items.map((item, index) => (
              <ContactLink key={index} href={item.link}>
                <div className="w-full md:w-[calc(33.33% - 2rem)] mb-4 md:mb-5 border-4 border-white rounded-lg flex flex-row items-center justify-center overflow-hidden transition-transform transform hover:scale-105">
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={45}
                    height={45}
                    className="mb-2 max-w-full h-auto p-2"
                  />
                  <h2 className="text-[#c3c4c7] text-md md:text-3xl font-['Merriweather'] p-3">
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

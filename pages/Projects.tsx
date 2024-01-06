"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ProjectsStructure {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  link: string;
}

interface ProjectsProps {
  items: ProjectsStructure[];
}

const ContactLink: React.FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);
const ProjectsPage: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <section className="flex flex-col justify-center items-center p-10">
      <h1 className="text-4xl pb-5 m-24 md:text-6xl text-[#c3c4c7] font-['Merriweather']">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items &&
          items.map((item, index) => (
            <ContactLink key={index} href={item.link}>
              <div
                key={index}
                className="flex flex-col h-auto border-white border-4 rounded-lg p-5 mb-5 items-center overflow-hidden transition-transform transform hover:scale-105"
              >
                <div className="flex flex-col items-center mb-4 md:mb-0 md:flex-row">
                  <div className="w-1/4 md:w-1/3 pr-4">
                    <Image
                      src={item.imageSrc}
                      alt={`${item.title} source`}
                      className="max-w-full rounded-lg"
                      width={300}
                      height={300}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="w-3/4 md:flex-grow">
                    <h2 className="text-[#c3c4c7] text-3xl text-center p-6 font-['Merriweather'] font-medium">
                      {item.title}
                    </h2>
                    <p className="text-[#c3c4c7] text-md md:text-lg font-['Merriweather'] font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </ContactLink>
          ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectsStructure {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

interface ProjectsProps {
  items: ProjectsStructure[];
}

const ProjectsPage: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <section className="flex flex-col justify-center items-center p-5">
      <h1 className="text-4xl pb-5 md:text-6xl text-[#c3c4c7] font-['Bebas']">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items && items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-auto border-white border-4 rounded-lg p-5 mb-5 items-center"
          >
            <div className="flex flex-col items-center mb-4 md:mb-0 md:flex-row">
              <div className="w-1/4 md:w-1/3 pr-4">
                <Image
                            layout="responsive"
        src={item.imageSrc}
                  alt={`${item.title} source`}
                  className="max-w-full rounded-lg"
                  width={300}
                  height={300}
                />
              </div>
              <div className="w-3/4 md:flex-grow">
                <h2 className="text-[#c3c4c7] text-3xl text-center p-6 font-['Bebas'] font-medium">
                  {item.title}
                </h2>
                <p className="text-[#c3c4c7] text-md md:text-lg font-['Bebas'] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

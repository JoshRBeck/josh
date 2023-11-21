import Image, { StaticImageData } from "next/image";
import React from "react";
import Sunshine from "../public/Sunshine.png";
import Kijufi from "../public/Kijuf.png";

interface ProjectsStructure {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

interface ProjectsProps {
  items: ProjectsStructure[];
}

const ProjectsStructure: ProjectsStructure[] = [
  {
    imageSrc: Sunshine,
    title: "Sunshine Wine App",
    description:
      "My final project from my time with Ironhack. We collaborated with students from the UX/UI team to take their vision and create an app for helping choose the correct wine for your situation based on your mood or setting. For this project, we used both a back-end database and authentication system using MongoDB, and Express. For the front end, we used what we learned with HTML, CSS, Javascript and React to build the app.",
  },
  {
    imageSrc: Kijufi,
    title: "Kinderrechte FilmFestival - Kijufi Berlin",
    description:
      "I was contacted by kijufi – Landesverband Kinder- und Jugendfilm Berlin e. V. to help create a website for an upcoming film festival in Berlin to promote youth and children being involved in film and media. For this project, I used React, Javascript and Tailwind. The goal was to create a responsive, mobile and exciting design in collaboration with the UX/UI designer.",
  },
];

const ProjectsPage: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl text-[#c3c4c7] font-['Bebas']">
        My Projects
      </h1>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div>
              <Image
                src={item.imageSrc}
                alt={`${item.title} source`}
                width={200}
                height={200}
              />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

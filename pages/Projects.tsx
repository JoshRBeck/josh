"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useAnimationHook from "../hooks/useAnimation";

interface ProjectsStructure {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

interface ProjectsProps {
  items: ProjectsStructure[];
}

const ProjectsPage: React.FC<ProjectsProps> = ({ items }) => {
  const { controls, animation } = useAnimationHook({
    duration: 0.5,
    delay: 1,
  });
9
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const currentRef = containerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef, controls]);

  return (
    <section className="flex flex-col justify-center items-center p-5">
      <h1 className="text-4xl pb-5 md:text-6xl text-[#c3c4c7] font-['Bebas']">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items &&
          items.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col h-auto border-white border-4 rounded-lg p-5 mb-5 items-center"
              {...animation}
              custom={index}
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
                  <h2 className="text-[#c3c4c7] text-3xl text-center p-6 font-['Bebas'] font-medium">
                    {item.title}
                  </h2>
                  <p className="text-[#c3c4c7] text-md md:text-lg font-['Bebas'] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

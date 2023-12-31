import React, { Suspense } from "react";
import Expertise from "../pages/Expertise";
import ExpertiseSkeleton from "../components/ExpertiseSkeleton";
import About from "../pages/About";
import ProjectsPage from "../pages/Projects";
import ContactJosh from "../pages/Contact";
import Navbar from "../components/Navbar";
import ExpertiseStructure from "../data/ExpertiseStructure";
import AboutStructure from "../data/AboutStructure";
import ProjectsStructure from "../data/ProjectsStructure";
import ContactStructure from "../data/ContactStructure";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-stone-800">
      <Navbar />
      <div className="flex flex-col items-center align-middle justify-center pb-48">
        <h1 className="text-6xl md:text-8xl text-[#c3c4c7] pt-48 font-['Merriweather']">
          Joshua Beck
        </h1>
        <h3 className="text-4xl md:text-6xl text-[#c3c4c7] font-['Merriweather']">
          Web developer
        </h3>
      </div>
      <Suspense fallback={<ExpertiseSkeleton />}>
        <Expertise items={ExpertiseStructure} />
      </Suspense>
      <About items={AboutStructure} />
      <ProjectsPage items={ProjectsStructure} />
      <ContactJosh items={ContactStructure} />
    </div>
  );
};

export default HomePage;

import Expertise from "../pages/Expertise";
import About from "../pages/About";
import ProjectsPage from "../pages/Projects";
import ContactJosh from "../pages/Contact";
import Navbar from "../components/Navbar";
import ExpertiseStructure from "../data/ExpertiseStructure";
import AboutStructure from "../data/AboutStructure";
import ProjectsStructure from "../data/ProjectsStructure";
import ContactStructure from "../data/ContactStructure";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#5a3f37] to-[#2c7744]">
      <Navbar />
      <div className="flex flex-col items-center align-middle justify-center pb-48">
        <h1 className="text-6xl md:text-8xl text-[#c3c4c7] pt-48 font-['Bebas']">
          Joshua Beck
        </h1>
        <h3 className="text-4xl md:text-6xl text-[#c3c4c7] font-['Bebas']">
          Web developer
        </h3>
      </div>
      <Expertise items={ExpertiseStructure} />
      <About items={AboutStructure} />
      <ProjectsPage items={ProjectsStructure} />
      <ContactJosh items={ContactStructure} />
    </div>
  );
}

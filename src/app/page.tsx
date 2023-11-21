import Navbar from "../../components/Navbar";
import Expertise from "../../pages/Expertise";
import ReactSVG from "../../public/React SVG.svg";
import ComputerSVG from "../../public/ComputerSVG.svg";
import About from "../../pages/About";
import Me from "../../public/Me.jpg";
import ProjectsPage from "../../pages/Projects";
import Kijufi from "../../public/Kijuf.png";
import Sunshine from "../../public/Sunshine.png";

const expertiseItems = [
  {
    logoSrc: ReactSVG,
    title: "Front End Development",
    description:
      "I specialize in crafting responsive, visually appealing, and functional website designs for both mobile and desktop platforms. Proficient in utilizing HTML, CSS, and JavaScript, I bring a creative approach to web development. My expertise extends to frameworks like React and Next.js, where I have successfully delivered projects that seamlessly blend design aesthetics with optimal functionality..",
  },
  {
    logoSrc: ComputerSVG,
    title: "Back End Development",
    description:
      "Experienced in backend web development with Node.js, Express, and MongoDB. Specialized in creating secure user authentication systems and optimizing API endpoints for enhanced performance. Committed to delivering efficient and scalable backend solutions that contribute to overall application success",
  },
];

const AboutProps = [
  {
    imageSrc: Me,
    title: "Joshua Beck",
    description:
      "Hey, I'm Josh Beck — originally from Vancouver, now calling Berlin home. After high school, my passion for travel led me to explore diverse cultures globally. Highlights? Fiji, a year each in Australia and New Zealand, and even a stint in South Korea for the Olympics. I'm an adventure seeker and sports enthusiast — Ice Hockey, Snowboarding, Skiing, Wakeboarding — I love them all. Plus, I'm a foodie, always on the hunt for new culinary experiences. Excited for the next chapter of my journey. Let's explore together!",
  },
];

const ProjectsStructure = [
  {
    imageSrc: Sunshine, // Add your image source here
    title: "Sunshine Wine App",
    description:
      "My final project from my time with Ironhack. We collaborated with students from the UX/UI team to take their vision and create an app for helping choose the correct wine for your situation based on your mood or setting. For this project, we used both a back-end database and authentication system using MongoDB, and Express. For the front end, we used what we learned with HTML, CSS, Javascript and React to build the app.",
  },
  {
    imageSrc: Kijufi, // Add your image source here
    title: "Kinderrechte FilmFestival - Kijufi Berlin",
    description:
      "I was contacted by kijufi – Landesverband Kinder- und Jugendfilm Berlin e. V. to help create a website for an upcoming film festival in Berlin to promote youth and children being involved in film and media. For this project I used React, Javascript and Tailwind. The goal was to create a responsive, mobile and exciting design in collaboration with the UX/UI designer.",
  },
];

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
      <Expertise items={expertiseItems} />
      <About items={AboutProps} />
      <ProjectsPage items={ProjectsStructure} />
    </div>
  );
}

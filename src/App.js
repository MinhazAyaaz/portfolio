import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import Skills from "./Components/Skills";
import Home from "./Components/Home";
import Exp from "./Components/Exp";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
// import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Add an event listener to update the screenWidth state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showIconOnly = screenWidth < 1500;
  const showOnlyMenu = screenWidth < 1000;
  const maintenance = screenWidth < 800;

  return (
    <div className="font-custom">
      <div
        className="bg-white"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          marginBottom: "20px",
        }}
      >
        <nav className="flex justify-between text-gray-600 py-8 font-semibold mx-[10%]">
          <span className=" flex cursor-pointer pt-3">
            <img
              src={"https://img.icons8.com/?size=512&id=19294&format=png"}
              alt="me"
              className="h-6 pr-4"
            />
            Minhazul Abedin Toshin
          </span>
          <div>
            {!showOnlyMenu ? (
              <ul className="flex justify-between">
                <li
                  className="px-5 py-1 hover:bg-[#fdc689] duration-200 hover:rounded-2xl cursor-pointer flex items-center h-10"
                  onClick={() => scrollToSection(homeRef)}
                >
                  <HomeOutlinedIcon className="mr-2 mb-1" />
                  {!showIconOnly && "Home"}
                </li>
                <li
                  className="px-5 py-1 hover:bg-[#fdc689] duration-200 hover:rounded-2xl cursor-pointer flex items-center h-10"
                  onClick={() => scrollToSection(skillsRef)}
                >
                  <ListAltIcon className="mr-2 mb-1" />
                  {!showIconOnly && "Skills"}
                </li>
                <li
                  className="px-5 py-1 hover:bg-[#fdc689] duration-200 hover:rounded-2xl cursor-pointer flex items-center h-10"
                  onClick={() => scrollToSection(expRef)}
                >
                  <CodeOutlinedIcon className="mr-2 mb-1" />
                  {!showIconOnly && "Experience"}
                </li>
                <li
                  className="px-5 py-1 hover:bg-[#fdc689] duration-200 hover:rounded-2xl cursor-pointer flex items-center h-10"
                  onClick={() => scrollToSection(expRef)}
                >
                  <SchoolOutlinedIcon className="mr-2 mb-1" />
                  {!showIconOnly && "Education"}
                </li>
                <li
                  className="px-5 py-1 hover:bg-[#fdc689] duration-200 hover:rounded-2xl cursor-pointer flex items-center h-10"
                  onClick={() => scrollToSection(projectsRef)}
                >
                  <PeopleAltIcon className="mr-2 mb-1" />
                  {!showIconOnly && "Projects"}
                </li>
                <li
                  className="px-5 py-1 hover:bg-[#fdc689] duration-200 hover:rounded-2xl cursor-pointer flex items-center h-10"
                  onClick={() => scrollToSection(contactRef)}
                >
                  <EmailOutlinedIcon className="mr-2 mb-1" />
                  {!showIconOnly && "Contact"}
                </li>
                <li className="px-5 py-1 hover:bg-[#fdc689] duration-200 hover:rounded-2xl cursor-pointer flex items-center h-10">
                  <button>
                    <NightlightRoundOutlinedIcon className="mr-2 mb-1" />
                    {!showIconOnly}
                  </button>
                </li>
              </ul>
            ) : (
              <button>
                <ListOutlinedIcon className="mr-2 mt-3" />
              </button>
            )}
          </div>
        </nav>
      </div>
      {!maintenance ? (
        <>
          <Home ref={homeRef} />
          <Skills ref={skillsRef} />
          <Exp ref={expRef} />
          <Project ref={projectsRef} />
          <Contact ref={contactRef} />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <h1 className="text-xl font-mono pb-4">
            Mobile Website under Maintenance!
          </h1>
          <p>Please visit the website on a larger screen!</p>
        </div>
      )}
    </div>
  );
}

export default App;

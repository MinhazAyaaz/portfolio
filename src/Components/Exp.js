import React, { useEffect, useState, forwardRef } from "react";
import CoverPicture from "../Images/cover2.png";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Exp = forwardRef((props, ref) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  const showOnlyMenu = screenWidth < 1000;
  const EloText = screenWidth < 1350;

  return (
    <div className="flex justify-center pt-[80px] h-screen bg-[#fdc689]" ref={ref}>
      <div className="w-full flex justify-center mt-28">
        {/* Experience */}
        <div className="w-[40%] h-[80%] mx-5 flex flex-col justify-center items-center">
          <div>
            <p className="text-4xl drop-shadow-xl font-serif text-gray-800">Experience</p>
            <div className="w-full h-2 bg-white mt-1 rounded-full"></div>
          </div>
          {/* Add the rectangle card */}
          <a href="https://elobyte.com/" target="_blank" className="w-[90%] h-[270px] bg-white mt-5 rounded-lg p-[3%] hover:scale-105 duration-300 transition shadow-2xl" >
            <h1 className="font-bold font-custom text-lg text-blue-600">ELO</h1>
            <p className="">Frontend Engineer Intern</p>
            <p className="text-xs font-custom">Feb 2022 - Jul 2022</p>
            <br/>
            <p className="text-xs">During my internship at ELO, I contributed to the design and development of website frontends using React. Working closely with the development team, I gained valuable experience in creating responsive and user-friendly interfaces.</p>
            {!EloText && <><p className="underline text-xs">Key Responsibilities:</p>
            <ul className="font-custom">
                <li className="text-xs">Collaborated with senior engineers and designers to create visually appealing and intuitive user interfaces.</li>
                <li className="text-xs">Implemented modern design principles and best practices to optimize website performance and usability.</li>
                <li className="text-xs">Assisted in the development of reusable UI components, enhancing code efficiency</li>
            </ul></>}
          </a>
          <a href="https://www.facebook.com/nglesports/" target="_blank" className="w-[90%] h-32 bg-white mt-2 rounded-lg hover:cursor-pointer p-[3%] hover:scale-105 duration-300 transition shadow-2xl">
          <h1 className="font-bold font-custom text-lg text-green-800">National Gaming League</h1>
            <p>Graphic Designer</p>
            <p className="text-xs font-custom">Jan 2017 - Dec 2020</p>
          </a>
        </div>
        {/* Education */}
        <div className="w-[40%] h-[80%] mx-5 flex flex-col justify-center items-center">
          <div>
            <p className="text-4xl drop-shadow-xl font-serif text-gray-800">Education</p>
            <div className="w-full h-2 bg-white mt-1 rounded-full"></div>
          </div>
          {/* Add the rectangle card */}
          <a href="http://www.northsouth.edu/" target="_blank" className="w-[90%] h-32 bg-white mt-5 rounded-lg hover:cursor-pointer p-[3%] hover:scale-105 duration-300 transition shadow-2xl">
          <h1 className="font-bold font-custom text-lg text-blue-600">North South University</h1>
            <p>Bachelor of Computer Science and Engineering</p>
            <p className="text-xs font-custom">Sept 2019 - Jun 2023</p>
            <p className="text-xs font-custom">Honor: Cum Laude</p>
          </a>
          <a href="https://mlis.edu.bd/" target="_blank" className="w-[90%] h-32 bg-white mt-3 rounded-lg hover:cursor-pointer p-[3%] hover:scale-105 duration-300 transition shadow-2xl">
          <h1 className="font-bold font-custom text-lg text-green-800">Maple Leaf International School</h1>
            <p>A Levels</p>
            <p className="text-xs font-custom">Jan 2017 - Jun 2017</p>
          </a>
          <a href="https://mlis.edu.bd/" target="_blank" className="w-[90%] h-32 bg-white mt-3 rounded-lg hover:cursor-pointer p-[3%] hover:scale-105 duration-300 transition shadow-2xl">
          <h1 className="font-bold font-custom text-lg text-green-800">Maple Leaf International School</h1>
            <p>O Levels</p>
            <p className="text-xs font-custom">Jun 2017 - Jun 2019</p>
          </a>
        </div>
      </div>
    </div>
  );
})

export default Exp;

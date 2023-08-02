import React, { forwardRef, useEffect, useState } from "react";
import CoverPicture from '../Images/cover2.png'
import { Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from '../Images/resume.pdf'

const Home = forwardRef((props, ref) => {

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

    return( 
        <div className={`flex justify-center pt-[116px] h-screen px-[10%] 2xl:px-[20%] ${showOnlyMenu ? 'flex-col items-center mt-[120px]' : ''}`} ref={ref}>
        {showOnlyMenu && <img src={CoverPicture} className={`h-[400px] -ml-40 ${showOnlyMenu ? 'h-64' : ''}` } alt="myPicture"/>}
        <div className="text-gray-800 flex flex-col mt-[13%]">
            <h1 className="text-6xl font-semibold">Hi, I'm Minhaz</h1>
            <h1 className="text-xl my-5 font-semibold">FullStack Developer</h1>
            <p className="w-[70%] mb-5">Driven and enthusiastic, I am a recent Computer Science and Engineering graduate with a passion for leveraging technology 
            to solve complex problems and drive innovation. Throughout my academic journey, I have developed a solid foundation in software development, data structures, 
            algorithms, and computer systems.</p>
            <p className="w-[70%] mb-5">I thrive in fast-paced, collaborative environments where I can apply my technical expertise and creativity to develop robust and scalable software applications. 
            My strong problem-solving skills and ability to quickly adapt to new technologies make me well-equipped to tackle challenges in the ever-evolving field of technology.</p>
            <a href={resume} download={"Minhaz_Abedin_Toshin_Resume.pdf"}><Button variant="contained" className="w-40" style={{ backgroundColor: '#fdc689', color: '#2b2b2b',fontWeight: 'bold' }}>Download CV</Button></a>
            <div className="mt-7 flex justify-between w-40">
              <a href="https://www.linkedin.com/in/minhazulabedintoshin/" target="_blank"><LinkedInIcon/></a>
              <a href="https://github.com/MinhazAyaaz" target="_blank"><GitHubIcon/></a>
              <a href="https://www.instagram.com/ayaaz.abedin/" target="_blank"><InstagramIcon/></a>
              <a href="https://www.facebook.com/AyaazNation/" target="_blank"><FacebookIcon/></a>
            </div>
        </div>
        {!showOnlyMenu && <img src={CoverPicture} className="h-[400px] mt-[12%] -ml-40" alt="myPicture"/>}
        </div>
    )
})

export default Home;
    
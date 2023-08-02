import React, { forwardRef, useState, useEffect } from "react";
import TvIcon from '@mui/icons-material/Tv';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';

const Skills = forwardRef((props, ref) => {

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

  const showIconOnly = screenWidth < 1280;

  return (
    <div className="flex flex-col pt-[116px] h-screen relative" ref={ref}>
      <h1 className="absolute flex justify-center w-full pt-16 text-gray-800 font-semibold text-5xl">
        Skills
      </h1>
      <div className="absolute w-16 h-2 bg-[#fdc689] left-1/2 transform -translate-x-1/2 mt-[120px] rounded-full"></div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/5 h-1/2 mx-10 bg-[#fdc689] shadow-[-22px_21px_69px_0px_#fdc689] rounded-2xl p-10 hover:scale-110 transition duration-500">
          <h1 className={`font-semibold font-mono text-gray-900 ${showIconOnly ? 'text-base' : 'text-2xl'}`}>
            <TvIcon className="mr-4"/>Frontend Developer
          </h1>
          <ul className="text-sm mt-6 text-gray-800 font-semibold flex flex-col justify-between h-3/4">
            <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">HTML</span>
              </a>
            </li>
            <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">CSS</span>
              </a>
            </li>
            <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">JavaScript</span>
              </a>
            </li>
            <li>
            <a href="https://react.dev/" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">ReactJS</span>
              </a>
            </li>
            <li>
            <a href="https://angularjs.org/" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">AngularJS</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/5 h-1/2 mx-10 bg-[#fdc689] shadow-[-22px_21px_69px_0px_#fdc689] rounded-2xl p-10 hover:scale-110 transition duration-500">
          <h1 className={`font-semibold font-mono text-gray-900 ${showIconOnly ? 'text-base' : 'text-2xl'}`}>
            <StorageRoundedIcon className="mr-4"/>Backend Developer
          </h1>
          <ul className="text-sm mt-6 text-gray-800 font-semibold flex flex-col justify-between h-3/4">
            <li>
            <a href="https://aws.amazon.com/what-is/sql/" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">SQL</span>
              </a>
            </li>
            <li>
            <a href="https://www.php.net/" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">PHP</span>
              </a>
            </li>
            <li>
            <a href="https://nodejs.dev/en/" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Node</span>
              </a>
            </li>
            <li>
            <a href="https://www.djangoproject.com/" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Django</span>
              </a>
            </li>
            <li>
            <a href="https://git-scm.com/" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Git</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/5 h-1/2 mx-10 bg-[#fdc689] shadow-[-22px_21px_69px_0px_#fdc689] rounded-2xl p-10 hover:scale-110 transition duration-500">
          <h1 className={`font-semibold font-mono text-gray-900 ${showIconOnly ? 'text-base' : 'text-2xl'}`}>
            <BrushOutlinedIcon className="mr-4"/>Graphic Designer
          </h1>
          <ul className="text-sm mt-6 text-gray-800 font-semibold flex flex-col justify-between h-3/4">
            <li>
            <a href="https://www.adobe.com/products/photoshop.html" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Adobe Photoshop</span>
              </a>
            </li>
            <li>
            <a href="https://www.adobe.com/products/illustrator.html" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Adobe Illustrator</span>
              </a>
            </li>
            <li>
            <a href="https://www.adobe.com/products/premiere.html" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Premier Pro</span>
              </a>
            </li>
            <li>
            <a href="https://www.figma.com/" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Figma</span>
              </a>
            </li>
            <li>
            <a href="https://sketch.io/sketchpad/" target="_blank" className="relative px-4 py-2 group w-full flex justify-center items-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Sketch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
})

export default Skills;

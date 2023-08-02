import React, { useEffect, useState, forwardRef } from "react";
import Carousel from "./Carousel";

const Project = forwardRef((props, ref) => {
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

  const showIconOnly = screenWidth < 1500;
  const showOnlyMenu = screenWidth < 1000;

  const slideData = [
    {
      index: 0,
      headline: "Driver Safety System",
      button: "Learn More",
      src: "https://www.researchgate.net/publication/305674408/figure/fig2/AS:427532118958083@1478943008733/Block-diagram-of-the-circuit-designed-by-Proteus-software-The-handheld-portable.png",
      link: "https://github.com/MinhazAyaaz/Driver-Safety-System",
    },
    {
      index: 1,
      headline: "NSU Complaint App",
      button: "Learn More",
      src: "https://scontent.fdac5-1.fna.fbcdn.net/v/t1.15752-9/279884340_1177800016380906_855958244571357041_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeERmZkstc9pGoac2zg3IBjvwHut2-XEVEnAe63b5cRUSaN6ouAuhyFsif_Zvu6g7jIJOtouGvb-UMrg3uiivu5O&_nc_ohc=Dyzf_8mHL4kAX_kM8yf&_nc_pt=1&_nc_ht=scontent.fdac5-1.fna&oh=03_AdS-yT_oDIOWPEKN4brlJWMp52hnVw6zBbBT1lett1JZHw&oe=64F0F427",
      link: "https://github.com/MinhazAyaaz/NSUComplaintApp-react",
    },
    {
      index: 2,
      headline: "Todo App",
      button: "Learn More",
      src: "https://github.com/MinhazAyaaz/Todo-app-using-react/raw/master/src/Demo.png?raw=true",
      link: "https://github.com/MinhazAyaaz/Todo-app-using-react",
    },
    {
      index: 3,
      headline: "Thesis on FER2013",
      button: "Learn More",
      src: "https://github.com/MinhazAyaaz/Early-Fusion-of-CNN-and-BovW-FER2013/blob/main/poster.jpg?raw=true",
      link: "https://github.com/MinhazAyaaz/Early-Fusion-of-CNN-and-BovW-FER2013",
    },
    {
      index: 4,
      headline: "Weather App",
      button: "Learn More",
      src: "https://github.com/MinhazAyaaz/Weather-App-React/raw/master/src/demo.png?raw=true",
      link: "https://github.com/MinhazAyaaz/Weather-App-React",
    },
    {
      index: 5,
      headline: "Shabdhan",
      button: "Learn More",
      src: "https://camo.githubusercontent.com/6d36b3605341893ebee6cc5c41bfa969edb08b778db6c2feb4706cc81da1df42/68747470733a2f2f692e6962622e636f2f62376667374a4e2f53637265656e73686f742d323032332d30372d31342d3031343835392e706e67",
      link: "https://github.com/MinhazAyaaz/Shabdhan",
    },
    {
      index: 6,
      headline: "Fooder Login Page",
      button: "Learn More",
      src: "https://i.ibb.co/JjFzp9s/Screenshot-2023-07-29-135218.png",
      link: "https://github.com/MinhazAyaaz/fooder",
    },
    {
      index: 7,
      headline: "CPU Process Scheduler App",
      button: "Learn More",
      src: "https://scontent.fdac5-2.fna.fbcdn.net/v/t1.15752-9/270307702_352953946163851_5219106776137442082_n.png?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHoX7mxvR0-brvxYgGCy2_NTHmF59O2ZYFMeYXn07ZlgX0h7VAu29A5IKfXgeKd2ZZ4I83R3-_TSSykp84ue0UG&_nc_ohc=Yn36cqvkgzYAX86jFZp&_nc_pt=1&_nc_ht=scontent.fdac5-2.fna&oh=03_AdTsY8MqbFBHFQlBHDLnfJ2gO7pWx5vhmPdSa2q8yK4mVA&oe=64F0F891",
      link: "https://github.com/MinhazAyaaz/Process-Scheduler-App",
    }

  ];

  return (
    <div className="flex justify-center h-screen pt-[180px] overflow-hidden" ref={ref}>
      <h1 className="absolute flex justify-center w-full text-gray-800 font-semibold text-5xl">
        Projects
      </h1>
      <div className="absolute w-16 h-2 bg-[#fdc689] left-1/2 transform -translate-x-1/2 mt-[60px] rounded-full"></div>
      <div className="mt-32">
      <Carousel heading="Example Slider" slides={slideData} />
      </div>
    
    </div>
  );
})

export default Project;

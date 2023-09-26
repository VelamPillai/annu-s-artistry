import React from "react";
import homeBG from "../assets/homeBG.jpeg";
import mobileHome from "../assets/mobileHome.jpeg";
// import { FaGithubSquare, FaLinkedin, FaXingSquare } from "react-icons/fa";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div id="Home">
      
      {
        window.innerWidth < 840 ? 
        (<img
          src={mobileHome}
          alt="homeBG"
          className="w-full h-screen  md:object-center  scale-x-[1] "
        />) :(
        <img
          src={homeBG}
          alt="homeBG"
          className="w-full h-screen  md:object-center  scale-x-[1] "
        />)

      }
      <div className="w-full h-screen absolute top-0 left-0 ">
        <Nav page={"home"}  />

        {/* <div className="flex justify-between pt-6 max-w-[100px] w-full  ">
            <FaLinkedin
              className="cursor-pointer"
              size={20}
              onClick={() =>
                window.open("https://www.linkedin.com/in/velam-pillai/")
              }
            />

            <FaGithubSquare
              className="cursor-pointer"
              size={20}
              onClick={() => window.open("https://github.com/VelamPillai")}
            />
          </div> */}
      </div>
    </div>
  );
};
export default Home;

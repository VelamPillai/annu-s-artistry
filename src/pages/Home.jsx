import React from "react";
import homeBG from "../assets/homeBG.jpeg";
// import { FaGithubSquare, FaLinkedin, FaXingSquare } from "react-icons/fa";
import SideNav from "../components/SideNav";

const Home = () => {
  return (
    <div id="Home">
      <img
        src={homeBG}
        alt="homeBG"
        className="w-full h-screen object-center  scale-x-[1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 ">
        <SideNav page={ "home"} />

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

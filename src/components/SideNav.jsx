import React, { useState } from "react";
import redbtn from "../assets/redbtn.jpeg";





const SideNav = () => {
  const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
      
    };
  const addBorder = (e) => {
    e.target.style.border = "2px solid cyan";
    e.target.firstChild.style.visibility = "visible";
    }

  const removeBorder = (e) => {
    e.target.style.border = "none";
  };
  return (
    <div>
      {/* mobile Menu */}
      {/* {nav ? (
        <div className=" md:hidden fixed w-full h-screen bg-white/100 flex flex-col justify-center items-center z-[20]">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
            onClick={handleNav}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
            onClick={handleNav}
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
            onClick={handleNav}
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href=""
            onClick={() => {
              window.open(resumeLink);
              handleNav();
            }}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200  "
            onClick={handleNav}
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )} */}
      {/* Menu for other devices */}
      <div className="hidden md:flex  fixed top-5 right-4 z-10">
        <div className="flex ">
          <button
            id="image-button"
            className="w-32 h-12 flex items-center justify-center bg-image-button bg-cover bg-center text-white hover:bg-opacity-80 transition duration-300 ease-in-out"
          >
            <img src={redbtn} alt="redbtn" className="object-center" />
          </button>

          {/* <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
            onMouseEnter={addBorder}
            onMouseLeave={removeBorder}
          >
            <p className=" ">Home</p>
          </a> */}
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
            onMouseEnter={addBorder}
            onMouseLeave={removeBorder}
          >
            <p className=" ">Gallery</p>
          </a>

          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
            onMouseEnter={addBorder}
            onMouseLeave={removeBorder}
          >
            <p className=" ">contact</p>
          </a>
        </div>
      </div>
    </div>
  );
}
export default SideNav
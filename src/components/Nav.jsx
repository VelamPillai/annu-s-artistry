import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import navButtonList from "../assets/navBtnList.js";





const SideNav = (props) => {
  const [redbtn, bluebtn, yellowbtn, gallerygallery, contactgallery, homegallery
  ] = navButtonList;
  const { page } = props;
  const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
      
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
      <div className="hidden md:flex  fixed top-0 right-5 z-10">
        <div className="flex ">
          <NavLink to="/">
            <button id="image-button" className="w-32 h-12 m-2 ">
              <img
                src={page==="home" ? redbtn : homegallery }
                alt="redbtn"
                className="object-center hover:translate-x-0.5	hover:scale-125"
              />
            </button>
          </NavLink>
          <NavLink to="/gallery">
            
          <button id="image-button" className="w-32 h-12 m-2  bg-green-300">
            <img
              src={page=== "home" ? yellowbtn : gallerygallery}
              alt="yellowbtn"
              className="object-center hover:translate-x-0.5	hover:scale-125"
            />
          </button>
          </NavLink>
          <NavLink to="/contact">

          <button id="image-button" className="w-32 h-12 m-2  ">
            <img
              src={ page=== "home"? bluebtn : contactgallery}
              alt="redbtn"
              className="object-center hover:translate-x-0.5	hover:scale-125"
            />
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default SideNav
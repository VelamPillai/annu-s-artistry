import React,{ useState} from "react";
import Nav from "../components/Nav.jsx";

import galleryImagesList from "../assets/galleryImgList.js";

function Gallery() {
  const [imgVisibility, setImgVisibility] = useState("none");
  const [imgLink, setImgLink] = useState(" ");
  const openImageHandler = (e) => {
   setImgVisibility((imgVisibility) => imgVisibility === "none" ? "flex" : "none");
    setImgLink(e.target.src);
    }

  return (
    <div id="gallery " className="bg-[#F8B971] relative">
      <div className="bg-[#F8B971] fixed w-full h-[150px]">
        <Nav page={"gallery"} />
      </div>

      <div className="max-w-[1200px] m-auto md:pl-20 p-4 py-16" >
        <div className="py-10 grid sm:grid-cols-4 gap-4 mt-[3rem]  ">
          {galleryImagesList.map((item, idx) => {
            return (
              <img
                src={item}
                alt={`image : ${item} `}
                key={idx}
                className="object-center border rounded-xl shadow-lg w-[200px] h-[200px]"
                onClick={openImageHandler}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{display: imgVisibility }}
        className="w-[1000px] h-[600px] absolute  top-[15%] left-[15%] bg-[#ded8d1e5] rounded-lg"
      >
        <button
          className="absolute top-5 right-5 font-extrabold text-[2rem] "
          onClick={openImageHandler}
        >
          X
        </button>
        <img
          src={imgLink}
          alt={`image : ${imgLink} `}
          className=" border rounded-xl shadow-lg w-[80%] h-[80%] m-auto  "
        />
      </div>
    </div>
  );
}
export default Gallery;

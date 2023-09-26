import React,{ useState} from "react";
import Nav from "../components/Nav.jsx";

import galleryImagesList from "../assets/galleryImgList.js";
import Modal from "../components/Modal.jsx";

function Gallery() {
  const [imgVisibility, setImgVisibility] = useState("none");
  const [imgLink, setImgLink] = useState(" ");
  const openImageHandler = (e) => {
   setImgVisibility((imgVisibility) => imgVisibility === "none" ? "flex" : "none");
    setImgLink(e.target.src);
    }

  return (
    <div id="gallery " className="bg-[#F8B971]  w-full h-full">
      <div className="bg-[#F8B971] fixed w-full h-[150px]">
        <Nav page={"gallery"} />
      </div>

      <div className="max-w-[1200px] m-auto md:pl-20 p-4 py-16 relative h-[100%]" >
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
      
      <Modal openImageHandler={ openImageHandler} imgLink = {imgLink} imgVisibility={imgVisibility} />
    </div>
  );
}
export default Gallery;

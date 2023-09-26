import React,{ useState} from "react";
import Nav from "../components/Nav.jsx";

import galleryImagesList from "../assets/galleryImgList.js";
import Modal from "../components/Modal.jsx";

function Gallery() {
  const [imgVisibility, setImgVisibility] = useState("none");
  const [overlay, setOverlay] = useState({ opacity: 1.0,zindex:40 });
  const [imgLink, setImgLink] = useState(" ");
  const openImageHandler = (e) => {
   setImgVisibility((imgVisibility) => imgVisibility === "none" ? "flex" : "none");
    setImgLink(e.target.src);
    setOverlay({ opacity: 0.2,zindex:0 });
    }

  return (
    <div id="gallery " className="bg-[#F8B971]  w-full h-full " >
      {/* nav  */}
      <div className="bg-[#F8B971] fixed w-full h-[150px] z-50 ">
        <Nav page={"gallery"} />
      </div>
      {/*display pictures list  */}
      <div  className="max-w-[1200px] m-auto md:pl-20 p-4 py-16 relative h-[100%] " style={{opacity : overlay.opacity,zIndex:overlay.zindex }}  >
        <div className="py-10 grid  md:grid-cols-4 gap-4 mt-[3rem] justify-center items-center ">
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
      {/* display single picture */}
      <Modal setImgVisibility={setImgVisibility} imgLink={imgLink} imgVisibility={imgVisibility} setOverlay={ setOverlay }  />
    </div>
  );
}
export default Gallery;

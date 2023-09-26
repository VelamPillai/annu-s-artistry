import React, {useState} from "react";

function Modal( props ) {
  const { setImgVisibility, imgLink, imgVisibility , setOverlay} = props;
  const closeImageHandler = (e) => {
    setImgVisibility((imgVisibility) => imgVisibility === "none" ? "flex" : "none");
    setOverlay({ opacity: 1.0 ,zindex:40});
    }
  return (
    
     <div
        style={{display: imgVisibility}}
      className="w-[300px] h-[500px] md:w-[1000px] md:h-[600px] fixed top-[30%] left-[15%] md:top-[15%] md:left-[15%] bg-[#ded8d1e5] rounded-lg"
      
      >
        <button
          className="absolute top-5 right-5 font-extrabold text-[2rem] "
          onClick={closeImageHandler}
        >
          X
        </button>
        <img
          src={imgLink}
          alt={`image : ${imgLink} `}
          className=" border rounded-xl shadow-lg w-[80%] h-[80%] m-auto  "
        />
      </div>
  )
}
export default Modal
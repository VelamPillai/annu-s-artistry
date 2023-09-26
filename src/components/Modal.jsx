

function Modal( props ) {
    // const { openImageHandler, imgLink, imgVisibility } = props;
  return (
     <div
        style={{display: props.imgVisibility }}
        className="w-[1000px] h-[600px] fixed  top-[15%] left-[15%] bg-[#ded8d1e5] rounded-lg"
      >
        <button
          className="absolute top-5 right-5 font-extrabold text-[2rem] "
          onClick={props.openImageHandler}
        >
          X
        </button>
        <img
          src={props.imgLink}
          alt={`image : ${props.imgLink} `}
          className=" border rounded-xl shadow-lg w-[80%] h-[80%] m-auto  "
        />
      </div>
  )
}
export default Modal
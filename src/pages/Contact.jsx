import Nav from "../components/Nav"; 
import house from "../assets/gallery/house.jpeg";

function Contact() {
  return (
    <div>
      <div id="Home">
      <img
        src={house}
        alt="house"
        className="w-full h-screen object-center  scale-x-[1]  "
        />
        <Nav page={"gallery"} />
        
        <div className="w-full h-screen absolute top-0 left-0 bg-[#F8B971] opacity-90">
          <div className="fixed top-[50%] left-[40%] font-extrabold text-xl flex justify-center items-center flex-col">
            <h1 className="text-2xl m-6">Contact us</h1>
            <button className="border-2 border-red-500 p-5 hover:bg-red-500 hover:text-white rounded-xl"><a href="mailto: velam.m@gmail.com?Subject=Message&body=Hello Analena,">Send Message</a></button>
          </div>

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

    </div>
  );
}
export default Contact;

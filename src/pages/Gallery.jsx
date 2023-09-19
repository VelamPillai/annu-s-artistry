import SideNav from "../components/SideNav.jsx"
import galleryBG from "../assets/galleryBG.jpeg";
import bear from "../assets/gallery/bear.jpeg";


function Gallery() {
  return (
    <div id="gallery " className="bg-[#F8B971] relative">
      <div className="bg-[#F8B971] fixed w-full h-[150px]">
        <SideNav page={"gallery"} />
      </div>

      <div className="max-w-[1200px] m-auto md:pl-20 p-4 py-16">
        <div className="py-10 grid sm:grid-cols-4 gap-4 mt-[3rem]  ">
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
          <img
            src={bear}
            alt="bear"
            className="object-center border rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
export default Gallery
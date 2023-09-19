import { Route, Routes } from "react-router-dom";

import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/home" element={<Home />} />
      <Route index path="/gallery" element={<Gallery />} />
      <Route index path="/contact" element={<Contact />} />
      <Route index path="*" element={<Home />} />
    </Routes>
  );
}

export default App;

import {useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../pages/Layout";
import About from "../pages/About";
import EditAbout from "../pages/EditAbout";
import Glazes from "../pages/Glazes";
import EditGlazes from "../pages/EditGlazes";
import EditUsers from "../pages/EditUsers";
import Gallery from "../pages/Gallery";
import EditGallery from "../pages/EditGallery";
import MainModal from "./MainModal.js";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [piece, setPiece] = useState(null);

  const pieceOnClick = (piece) => {
    if (window.innerWidth > 687) {
        setPiece(piece);
        setShowModal(true);
    }
   };

  return (
    <>
      <MainModal 
        piece={piece} 
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div id="all-content">
            <BrowserRouter>
              <Routes>
                <Route path="/react-project" element={<Layout />}>
                  <Route index element={<About />}/>
                  <Route path="about" element={<About />}/>
                  <Route path="edit-about" element={<EditAbout />}/>
                  <Route path="edit-about.html" element={<EditAbout />}/>
                  <Route path="gallery" element={<Gallery pieceOnClick={pieceOnClick}/>}/>
                  <Route path="glazes" element={<Glazes />}/>
                  <Route path="edit-gallery" element={<EditGallery />}/>
                  <Route path="edit-glazes" element={<EditGlazes />}/>
                  <Route path="edit-users" element={<EditUsers/>}/>
                  <Route path="index.html" element={<About />}/>
                  <Route path="about.html" element={<About />}/>
                  <Route path="gallery.html" element={<Gallery pieceOnClick={pieceOnClick}/>}/>
                  <Route path="glazes.html" element={<Glazes />}/>
                  <Route path="edit-gallery.html" element={<EditGallery />}/>
                  <Route path="edit-glazes.html" element={<EditGlazes />}/>
                  <Route path="edit-users.html" element={<EditUsers/>}/>
                </Route>
                <Route path="\*" element={<About />}/>
              </Routes>
            </BrowserRouter>
        </div>
      </>
  );
}

export default App;

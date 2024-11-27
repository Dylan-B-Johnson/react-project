import {useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
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
  const [showModal, setShowModal] = useState("");
  const [piece, setPiece] = useState(null);
  const [glazeEdits, setGlazeEdits] = useState([]);
  const [glazeEditId, setGlazeEditId] = useState(-1);
  const [onYes, setOnYes] = useState(() => {
  });

  const pieceOnClick = (piece) => {
    if (window.innerWidth > 687) {
        setPiece(piece);
        setShowModal("gallery");
    }
   };

  return (
    <>
      <MainModal 
        piece={piece} 
        showModal={showModal}
        setShowModal={setShowModal}
        onYes={onYes}
        glazes={glazeEdits}
        setGlazes={setGlazeEdits}
        glazeId={glazeEditId}
      />
      <div id="all-content">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Navigate to="about"/>}/>
                  <Route path="about" element={<About />}/>
                  <Route path="edit-about" element={<EditAbout />}/>
                  <Route path="gallery" element={<Gallery pieceOnClick={pieceOnClick}/>}/>
                  <Route path="glazes" element={<Glazes />}/>
                  <Route path="edit-gallery" element={<EditGallery />}/>
                  <Route path="edit-glazes" element={<EditGlazes setOnYes={setOnYes} setShowModal={setShowModal} glazes={glazeEdits} setGlazes={setGlazeEdits} setGlazeEditId={setGlazeEditId}/>}/>
                  <Route path="edit-users" element={<EditUsers/>}/>
                </Route>
              </Routes>
            </BrowserRouter>
        </div>
      </>
  );
}

export default App;

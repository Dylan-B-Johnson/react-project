import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import EditAbout from "./pages/EditAbout";
import Glazes from "./pages/Glazes";
import EditGlazes from "./pages/EditGlazes";
import EditUsers from "./pages/EditUsers";
import Gallery from "./pages/Gallery";
import EditGallery from "./pages/EditGallery";
import "./css/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />}/>
          <Route path="about" element={<About />}/>
          <Route path="edit-about" element={<EditAbout />}/>
          <Route path="edit-about.html" element={<EditAbout />}/>
          <Route path="gallery" element={<Gallery />}/>
          <Route path="glazes" element={<Glazes />}/>
          <Route path="edit-gallery" element={<EditGallery />}/>
          <Route path="edit-glazes" element={<EditGlazes />}/>
          <Route path="edit-users" element={<EditUsers/>}/>
          <Route path="index.html" element={<About />}/>
          <Route path="about.html" element={<About />}/>
          <Route path="gallery.html" element={<Gallery />}/>
          <Route path="glazes.html" element={<Glazes />}/>
          <Route path="edit-gallery.html" element={<EditGallery />}/>
          <Route path="edit-glazes.html" element={<EditGlazes />}/>
          <Route path="edit-users.html" element={<EditUsers/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div id="all-content">
    <App />
  </div>
);


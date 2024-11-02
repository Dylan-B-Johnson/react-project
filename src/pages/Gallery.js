import {useState, useEffect } from "react";
import Pieces from "../components/Pieces.js";

const Gallery = ({pieceOnClick}) => {
    return (
        <div id="remaining-content" className="remaining-content columns center-columns-horizontal">
            <div id="remaining-content-child" className="columns-all center-columns-horizontal  wrap">
		<Pieces pieceOnClick={pieceOnClick}/>
            </div>
        </div>
    );
};

export default Gallery

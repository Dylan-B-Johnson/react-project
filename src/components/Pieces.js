import {useState, useEffect } from "react";
import {backend, api} from "./API";
import axios from "axios";
import Piece from "./Piece.js";

const Pieces = ({pieceOnClick}) => {
    const [work, setWork] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get(api + "/work");
            setWork(response.data);
        })();
    },[]);

    return (
        <>
            {work.map((piece) => (
                <Piece 
                    // key property was not defined by us but it improves performance and removes a warning. Must be unique and unchanging no matter number of elements in list.
                    key={piece.image}
                    year={piece.year}
                    image={backend + piece.image.substring(1)}
                    hangs={piece.hangs}
                    cone={piece.cone}
                    highResPNG={piece.highResPNG} 
                    click={() => {pieceOnClick(piece);}}/>
            ))}
        </>
    );
};

export default Pieces;

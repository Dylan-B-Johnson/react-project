import React, { useEffect } from 'react';
import "../css/MainModal.css"

const basename = (aString) => {
   return aString.split('/').reverse()[0];
};

const MainModal = ({showModal, piece, setShowModal}) => {
    const close = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (  
                <div id="main-modal">
                  <div id="modal-child" className="placcard vertical-center">
                    <section>
                        <div className="columns-all">
                            <p id="close" className="pointer" onClick={close}>&times;</p>
                            <h2>{piece.year}</h2>
                        </div>
                        <div>
                            <img src={piece.highResPNG ? "./images/work/high-res/" + basename(piece.image).slice(0, -3) + "png" : "./images/work/high-res/" + basename(piece.image).slice(0, -3) + "jpg"} className="contain"/>
                            <p className="gallery-info">Slip cast with Cone {piece.cone}. {piece.hangs ? "Hangs on wall." : "Sits on pedestal."} </p>
                        </div>
                    </section>
                  </div>
                </div>) 
            }
        </>
    );
};

export default MainModal;

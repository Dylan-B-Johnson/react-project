import "../css/Piece.css"

const Piece = ({year, image, hangs, cone, highResPNG, click}) => {
    return (
        <div className="placcard desktop-pointer" onClick={click}>
            <p>{year}</p>
            <img className="contain" src={image}/>
            <p className="gallery-info-mobile gallery-placcard">Slip cast with Cone {cone}. {hangs ? "Hangs on the wall." : "Sits on pedestal."}</p>
        </div>
    );
};

export default Piece;

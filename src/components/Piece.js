const Piece = ({year, image, hangs, cone, highResPNG, click}) => {
    return (
        <div className="placcard" onClick={click}>
            <p>{year}</p>
            <img className="contain" src={image}/>
        </div>
    );
};

export default Piece;

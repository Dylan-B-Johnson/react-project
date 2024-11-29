const EditWork = ({year, image}) => {
  return (
    <div className="placcard">
        <p>{year}</p>
        <img className="contain" src={image}/>
        <div className="delete-button">
            <a href="#"><h3>Delete</h3></a>
        </div>
    </div>
  );
};

export default EditWork;

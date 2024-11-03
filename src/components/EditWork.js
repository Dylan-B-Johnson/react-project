const EditWork = ({year, image}) => {
  return (
    <div class="placcard">
        <p>{year}</p>
        <img class="contain" src={image}/>
        <div class="delete-button">
            <a href="#"><h3>Delete</h3></a>
        </div>
    </div>
  );
};

export default EditWork;

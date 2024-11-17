const Ingredient = ({materialNum, inputs, handleChange}) => {
  return (
    <>
      <div>
        <label htmlFor={"recipe-add-material-"+materialNum}>{"Material " + (materialNum + 1) + ":"}</label>
      </div>
      <div>
        <input required  type="text" id={"recipe-add-material-"+materialNum} name={"material"+materialNum} value={inputs.materials ? inputs.materials[materialNum] : ""} onChange={(e) => {handleChange(materialNum, e)}}/>
      </div>
      <div>
        <label htmlFor={"recipe-add-amount-"+materialNum}>{"Amount " + (materialNum + 1) + ":"}</label>
      </div>
      <div>
        <input required type="number" min="0" id={"recipe-add-amount-"+materialNum} name={"amount"+materialNum} value={inputs.amounts ? inputs.amounts[materialNum] : ""} onChange={(e) => {handleChange(materialNum, e)}}/>
      </div>
    </>
  );
};

export default Ingredient;

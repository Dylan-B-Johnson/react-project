import {useState, useEffect } from "react";
import "../css/Glaze.css";

const Glaze = ({_id, image, recipe, name, link, credit, cone}) => {
  const getDownloadHref = () => {
    let text = "Name: " + name + "\n";
    text += "Cone: " + cone + "\n";
    text += "----Recipe----\n";
    recipe.forEach((i) => {
      text += i.material + ": "  + i.amount + "\n";
    });
    text += "--------------\n";
    if (credit != "")
      text += "Credit: " + credit + "\n";
    if (link != "")
      text += "Credit Link: " + link + "\n";
    return `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`;
  };

  return (
    <div className="placcard placcard-glazes">
      <p>{name}</p>
      <div className="mobile-div columns-mobile">
        <div className="one img-div">
          <img src={image} className="one contain" alt={name}/>
        </div>
        <div className="one table-div">
          <p className="cone">Cone: {cone}</p>
          <table>
            <tbody>
              <tr>
                <th>Material</th>
                <th>Amount</th>
              </tr>
              {recipe.map((row) => (
                <tr key={row.material + row.amount}>
                  <td>{row.material}</td>
                  <td>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {credit != "" && <a target="_blank" className={link == "" ? "no-text-decor" : ""} href={link == "" ? undefined : link}>{credit}</a>}
          <div className="download-recipe text-align-left delete-button delete-button-edit-users">
            <a href={getDownloadHref()} download={name + ".txt"}><h3>Download</h3></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glaze;

import {useState, useEffect } from "react";
import {backend, api} from "./API";
import axios from "axios";
import GlazeEdit from "./GlazeEdit.js";

const GlazeEdits = ({glazeEdits, setGlazeEdits, setOnYes, setShowModal}) => {
    useEffect(() => {
        (async() => {
            const response = await axios.get(api + "/recipes");
            setGlazeEdits(response.data);
        })();
    },[]);

    return (
        <>
            {glazeEdits.map((glaze) => (
                    <GlazeEdit
                        key={glaze._id}
                        _id={glaze._id}
                        image={glaze.image.substr(0, 4) == "blob" ? glaze.image : backend + glaze.image.substring(1)}
                        recipe={glaze.recipe}
                        name={glaze.name}
                        link={glaze.link}
                        credit={glaze.credit}
                        cone={glaze.cone}
                        setOnYes={setOnYes}
                        setShowModal={setShowModal}
                        setGlazeEdits={setGlazeEdits}
                        glazeEdits={glazeEdits}
                    />
                ))
            }
        </>
    );
};

export default GlazeEdits;



import {useState, useEffect } from "react";
import axios from "axios";
import GlazeEdit from "./GlazeEdit.js";

const GlazeEdits = () => {
    const [glazeEdits, setGlazeEdits] = useState([]);

    useEffect(() => {
        (async() => {
            const response = await axios.get("./recipes.json");
            setGlazeEdits(response.data);
        })();
    },[]);

    return (
        <>
            {glazeEdits.map((glaze) => (
                    <GlazeEdit
                        key={glaze._id}
                        image={glaze.image}
                        recipe={glaze.recipe}
                        name={glaze.name}
                        link={glaze.link}
                        credit={glaze.credit}
                        cone={glaze.cone}
                    />
                ))
            }
        </>
    );
};

export default GlazeEdits;



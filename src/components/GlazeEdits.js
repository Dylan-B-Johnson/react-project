import {useState, useEffect } from "react";
import {backend, api} from "./API";
import axios from "axios";
import GlazeEdit from "./GlazeEdit.js";

const GlazeEdits = () => {
    const [glazeEdits, setGlazeEdits] = useState([]);

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
                        image={backend + glaze.image.substring(1)}
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



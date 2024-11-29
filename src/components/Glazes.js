import {useState, useEffect } from "react";
import {backend, api} from "./API";
import axios from "axios";
import Glaze from "./Glaze.js";

const Glazes = () => {
    const [glazes, setGlazes] = useState([]);

    let updatedHeight = false;

    const updateGlazeHeight = () => {
        if (updatedHeight || window.innerWidth < 687) 
            return;
        let maxHeight = 0;
        const space = document.getElementById("remaining-content-child");
        const children = space.children;
        document.querySelector(':root').style.setProperty("--glaze-height", "fit-content");
        for (let i = 0; i < children.length; i++) {
            if (children[i].offsetHeight > maxHeight)
                maxHeight = children[i].offsetHeight;
        }
        if (maxHeight == 0) 
            return false;
        for (let i = 0; i < children.length; i++) {
            document.querySelector(':root').style.setProperty("--glaze-height", maxHeight.toString() + "px");
        }
        updatedHeight = true;
        return true;
    };

    useEffect(() => {
        (async() => {
            const response = await axios.get(api + "/recipes");
            setGlazes(response.data);
            const updateHeight = setInterval(() => {
            // poll until page has updated based on the updated state
            if (updateGlazeHeight())
                clearInterval(updateHeight);
            }, 10);
        })();
        window.addEventListener('resize', updateGlazeHeight);
    },[]);

    return (
        <>
            {glazes.map((glaze) => (
                    <Glaze
                        key={glaze._id}
                        image={glaze.image.substring(0, 4) == "blob" ? glaze.image : backend + glaze.image.substring(1)}
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

export default Glazes;



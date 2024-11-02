import {useState, useEffect } from "react";
import axios from "axios";
import Glaze from "./Glaze.js";
import { createRoot } from 'react-dom/client';

const Glazes = () => {
    // We cannot use usestate here because there is no way to perform a function after the 
    // state has updated (because we need to render all glazes, find all their heights, and
    // then set all their heights to be the max)

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
            const response = await axios.get("./recipes.json");
            const glazes = []
            response.data.forEach((glaze) => {
                glazes.push(
                    <Glaze
                        key={glaze._id}
                        image={glaze.image}
                        recipe={glaze.recipe}
                        name={glaze.name}
                        link={glaze.link}
                        credit={glaze.credit}
                        cone={glaze.cone}
                    />
                );
            });
            createRoot(document.getElementById("remaining-content-child")).render(glazes);
            const updateHeight = setInterval(() => {
                if (updateGlazeHeight())
                    clearInterval(updateHeight);
            }, 10);
        })();
        window.addEventListener('resize', updateGlazeHeight);
    },[]);

    return (
        <></>
    );
};

export default Glazes;

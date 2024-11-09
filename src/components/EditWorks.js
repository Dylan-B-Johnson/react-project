import {useEffect, useState} from "react";
import {backend, api} from "./API";
import EditWork from "../components/EditWork.js";
import axios from "axios";
const EditWorks = () => {
    const [editWorks, setEditWorks] = useState([]);

    useEffect(() => {
        (async() => {
            const response = await axios.get(api + "/work");
            setEditWorks(response.data);
            console.log(response.data);
        })();
    },[]);

    return (
      <>
        {editWorks.map((work) => (
            <EditWork 
                key={work.image}
                year={work.year}
                image={backend + work.image.substring(1)}
            />
        ))}
      </>
    );
};

export default EditWorks

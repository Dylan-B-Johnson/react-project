import {useEffect, useState} from "react";
import EditWork from "../components/EditWork.js";
import axios from "axios";
const EditWorks = () => {
    const [editWorks, setEditWorks] = useState([]);

    useEffect(() => {
        (async() => {
            const response = await axios.get("./work.json");
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
                image={work.image}
            />
        ))}
      </>
    );
};

export default EditWorks

import {useState, useEffect} from "react";
import axios from "axios";
import UserTableRow from "./UserTableRow.js";
import "../css/UserTable.css";

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async() => {
            const response = await axios.get("./users.json");
            setUsers(response.data);
        })();
    },[]);

    return (
        <>
          <table>
              <tbody>
                  <tr>
                      <th>Username</th>
                      <th className="text-align-center">Date Added (DD/MM/YY)</th>
                      <th></th>
                      <th></th>
                  </tr>
                  {users.map((user) => (
                          <UserTableRow
                              key={user.username}
                              username={user.username}
                              dateAdded={user.dateAdded}
                          />
                      ))
                  }
              </tbody>
          </table>
        </>
    );
};

export default UserTable;


import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function DeleteAll() {
    const [users, setUsers] = useContext(UserContext);
    
    const deleteAll = () => {
        localStorage.removeItem('users');
        setUsers([]);
      }

    return (
        <div>
            <button className="btn btn-danger mt-2 mx-2" onClick={deleteAll}>Delete All Users</button>
        </div>
    )
}

export default DeleteAll;
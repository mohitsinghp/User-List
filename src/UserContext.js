import React, {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const allUserStr = localStorage.getItem('users');
    let allUsers = [];
    if(allUserStr) {
        allUsers = JSON.parse(allUserStr);
    }
    const [users, setUsers] = useState(allUsers);
    return (
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}
import React, { useState, useContext } from 'react';
import Modal from "react-bootstrap/Modal";
import DisplayUser from './DisplayUser';
import { UserContext } from './UserContext';

const UserTable = () => {
    const [users, setUsers] = useContext(UserContext);
    const [newUser, setNewUser] = useState({
        id: '',
        avatar: '',
        name: '',
        age: '',
        phone:'',
        relocation: true,
        email:''
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function deleteUser(event, id) {
        event.stopPropagation();
        let allUsers = localStorage.getItem('users');
        if(allUsers) {
            allUsers = JSON.parse(allUsers);
            allUsers = allUsers.filter(item => item.id !== id);
        }
        localStorage.setItem('users', JSON.stringify(allUsers));
        setUsers(prevData => {
            return [...allUsers];
        });
    }
    function displayUserData(id) {
        let allUsers = localStorage.getItem('users');
        if (allUsers) {
            allUsers = JSON.parse(allUsers);
            allUsers = allUsers.filter(item => item.id === id);
        }
        setNewUser(allUsers[0]);
        handleShow();
    }

    const saveUser = (newUser) => {
        let allUsers = localStorage.getItem('users');
        if(allUsers) {
            allUsers = JSON.parse(allUsers);
            allUsers = allUsers.map(item => {
                return item.id !== newUser.id ? item : newUser;
            });
        } else {
            allUsers = [newUser];
        }
        localStorage.setItem('users', JSON.stringify(allUsers));
        setUsers(prevData => {
            return [...allUsers]
        });
    }

    const tableItems = users.map((item, index) =>
        <tr key={"tableRow" + index} onClick={() => displayUserData(item.id)}>
            <td key={item.name} className="text-center">{item.name}</td>
            <td key={item.age} className="text-center">{item.age}</td>
            <td key={item.email} className="text-center">{item.email}</td>
            
            <td key="{item.name + deleteUser}" className="text-center">
                <button className="btn btn-danger" onClick={(event) => deleteUser(event, item.id)}>Delete</button>
            </td>
        </tr>
    );

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="user-data-modal">
                <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <Modal.Title>User Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DisplayUser 
                            user={newUser}
                            onSaveUser={saveUser}
                            onHandleClose={handleClose} />
                    </Modal.Body>
                </Modal>
            </div>

            <table className=" table table-hover">
                <thead>
                    <tr key="tableHeadRow">
                        <th scope="column" key="nameHead" className="text-center">NAME</th>
                        <th scope="column" key="ageHead" className="text-center">AGE</th>
                        <th scope="column" key="emailHead" className="text-center">EMAIL</th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </table>
        </div>
    );
}

export default UserTable;
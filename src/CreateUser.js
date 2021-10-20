
import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import Modal from "react-bootstrap/Modal";
import DisplayUser from './DisplayUser';
import {nameGenerator, ageGenerator,phoneNumberGenerator, getRelocation,emailGenerator,avatarGenerator} from './helper/randomUserHelper';

function CreateUser() {
    const [show, setShow] = useState(false);
    const [users, setUsers] = useContext(UserContext);
    const [submit, setSubmitUser] = useState(false);
    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        age: '',
        phone:'',
        relocation: true,
        email:''
    });

    const createUserData = () => {
        handleShow();
    }

    const createRandomUser = () => {
        let newUser = {
            id: new Date().valueOf(),
            avatar: avatarGenerator(),
            name: nameGenerator(),
            age: ageGenerator(),
            phone: phoneNumberGenerator(),
            email: emailGenerator()
        }

        newUser.relocation = getRelocation(newUser.age);

        setNewUser({
                ...newUser
            });
    }

    const saveUser = (newUser) => {
        let allUsers = localStorage.getItem('users');
        if(allUsers) {
            allUsers = JSON.parse(allUsers);
            allUsers.push(newUser);
        } else {
            allUsers = [newUser];
        }
        localStorage.setItem('users', JSON.stringify(allUsers));
        setUsers(prevData => {
            return [...prevData, newUser]
        });
    }

    const handleClose = () => {
        setShow(false);
        setNewUser({
            id: '',
            name: '',
            avatar: '',
            age: '',
            phone:'',
            relocation: true,
            email:''
        });
    }
    const handleShow = () => setShow(true);

    return (
        <div>
            <button className="btn btn-primary mt-2 mx-2"
                onClick={createUserData}>
                <i className="fas fa-user-plus"></i> Create User
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Create User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DisplayUser 
                        user={newUser} 
                        onSaveUser={saveUser}
                        onCreateRandomUser={createRandomUser}
                        onHandleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateUser;
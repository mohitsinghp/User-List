
import React, { useState } from "react";
import { Form, Button, FormLabel } from "react-bootstrap";
import { validateName, formatPhoneNumber, validatePhone, validateEmail, } from './helper/validationHelper';

function DisplayUser({ user, submit, onHandleClose, onCreateRandomUser, onSaveUser }) {
    const [relocation, setRelocation] = useState(user?.relocation);
    const [error, setError] = useState('');

    const handleNameChange = (event) => {
        if (validateName(event.target.value, setError)) {
            user.name = event.target.value;
        }
    }
    const handleAgeChange = (event) => {
        user.age = event.target.value;
    }
    
    const handlePhoneChange = (event) => {
            user.phone = event.target.value;
    }
    const handleRelocationChange = (event) => {
        user.relocation = !!event.target.checked;
        setRelocation(!!event.target.checked);
    }
    const handleEmailChange = (event) => {
        if(validateEmail(event.target.value,setError)){
        user.email = event.target.value;
        }
    }

    const handleClose = () => {
        onHandleClose();
    }

    const createRandomUser = () => {
        onCreateRandomUser();
    }

    const handleSubmit = (event) => {
        onSaveUser(user);

        onHandleClose();
        event.preventDefault();

    }

    return (<div>
        <div className="text-danger">{error}</div>
        <Form onSubmit={handleSubmit}>
            {user.avatar && <Form.Group className="mb-3" controlId="formGroupAvatar">
                <Form.Label key={user.avatar}>
                    <img alt="avatar" src={user.avatar} />
                </Form.Label>
            </Form.Group>}
            <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    className="mb-2"
                    type="text"
                    defaultValue={user.name}
                    placeholder={user.name}
                    onChange={handleNameChange}
                    required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    type="number"
                    defaultValue={user.age}
                    placeholder={user.age}
                    min="18"
                    max="45"
                    onChange={handleAgeChange}
                    required />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                    type="checkbox"
                    defaultValue={user.relocation}
                    label="Relocation"
                    checked={relocation}
                    onChange={handleRelocationChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhone">
                <Form.Label>Phone Number: </Form.Label>
                <FormLabel>{formatPhoneNumber(user.phone)}</FormLabel>
                <Form.Control
                    type="phone"
                    defaultValue={user.phone}
                    title="10 digit phone number"
                    placeholder={formatPhoneNumber(user.phone)}
                    minLength="10"
                    maxLength="10"
                    onChange={handlePhoneChange}
                    pattern="[1-9][0-9]{9}"
                    required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    defaultValue={user.email}
                    placeholder={user.email}
                    onChange={handleEmailChange}
                    required />
            </Form.Group>
            {!!onCreateRandomUser && (<Button variant="primary" className="mx-1" onClick={createRandomUser}>
                Create Random User
            </Button>)}
            {!error && <Button type="submit" variant="primary" className="mx-1">
                Save
            </Button>}
            <Button variant="secondary" onClick={handleClose} className="mx-1">
                Close
            </Button>
        </Form>
    </div>
    )
}

export default DisplayUser;
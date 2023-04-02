import React, { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useMutation } from "@apollo/client/react/hooks";
import "../App.css";
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginForm = () => {
const [userFormData, setUserFormData] = useState({ email: '', password: '' });
const [validated] = useState(false);
const [showAlert, setShowAlert] = useState(false);
const [loginUser ] = useMutation(LOGIN_USER)
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUserFormData({ ...userFormData, [name]: value });
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  // check if form has everything (as per react-bootstrap docs)
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    
  }
  
  try {
    console.log("1 loginUser",userFormData);
    const { data } = await loginUser({ variables: { ...userFormData } });
    //const response = await loginUser(userFormData);
    console.log("2 loginUser",userFormData);
    Auth.login(data.login.token)
    } catch (err) {
      alert(err);
      console.error(err);
    }

  setUserFormData({
    username: '',
    email: '',
    password: '',
  });
};


  // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group className="input-container">
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          {/* <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback> */}
        </Form.Group>

        <Form.Group className="input-container">
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          {/* <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback> */}
        </Form.Group>
        <div className="button-container">
        <Button  
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
        </div>
      </Form>


    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="icon">
            <LockOutlinedIcon />
        </div>
        <div className="title">Sign In</div>
        { renderForm}
      </div>
    </div>
  );
}

export default LoginForm;



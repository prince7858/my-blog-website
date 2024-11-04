// pages/Register.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const RegisterContainer = styled.div`
  padding: 2rem;
  max-width: 400px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background: #6c63ff;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered User:', { username, password });
    // Implement user registration logic here

    // Show success notification
  toast.success('Registration successful!');
  };

  return (
    <RegisterContainer>
      <Title>Register</Title>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <SubmitButton type="submit">Register</SubmitButton>
      </form>
      <ToastContainer />
    </RegisterContainer>
  );
};

export default Register;

// pages/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginContainer = styled.div`
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

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged In User:', { username, password });
    // Implement user login logic here
  
    // Simulating a login failure for demonstration purposes
    if (!username || !password) {
      toast.error('Login failed. Please try again.'); // Add this line
    } else {
      toast.success('Login successful!'); // Add this line if login is successful
    }
  };
  
  return (
    <LoginContainer>
      <Title>Login</Title>
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
        <SubmitButton type="submit">Login</SubmitButton>
      </form>
      <ToastContainer />
    </LoginContainer>
  );
};

export default Login;

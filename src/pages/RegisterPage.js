// src/pages/RegisterPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  padding: 2rem;
  max-width: 400px;
  margin: auto;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem;
  background: #6c63ff;
  color: white;
  border: none;
  cursor: pointer;
`;

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log("Registering with", email, password);
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button type="submit">Register</Button>
      </form>
    </RegisterContainer>
  );
};

export default RegisterPage;

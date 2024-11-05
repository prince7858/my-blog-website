// src/pages/LoginPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Logging in with", email, password);
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <Button type="submit">Login</Button>
      </form>
    </LoginContainer>
  );
};

export default LoginPage;

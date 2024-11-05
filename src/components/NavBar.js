// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  background: #6c63ff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <h1 style={{ color: 'white' }}>My Blog</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;

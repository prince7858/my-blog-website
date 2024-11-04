import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #6c63ff;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #f0f0f0;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <h1>My Blog</h1>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Sign In</NavLink>
        <NavLink to="/register">Register</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default NavBar;

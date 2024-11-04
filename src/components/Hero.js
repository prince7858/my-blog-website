// components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(120deg, #282c34, #6c63ff);
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0.5rem;
  animation: fadeIn 2s ease-in-out;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  color: #b3b3b3;
`;

const HeroIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  margin-top: 1rem;
  color: #6c63ff;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const Hero = () => (
  <HeroContainer>
    <Title>Prince Kumar</Title>
    <Subtitle>Exploring Frontend and Web Development</Subtitle>
    <HeroIcon icon={faUser} />
  </HeroContainer>
);

export default Hero;

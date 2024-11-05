// components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  padding: 1rem;
  background: #333;
  color: #fff;
  text-align: center;
  width: 100%;
  margin-top: auto; // Ensures it sticks to the bottom
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 0 1rem;
  color: #6c63ff;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>Connect with me</p>
    <div>
    <a href="https://github.com/prince7858" target="_blank" rel="noopener noreferrer">
        <SocialIcon icon={faGithub} title="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/prince-singh-2021/" target="_blank" rel="noopener noreferrer">
        <SocialIcon icon={faLinkedin} title="LinkedIn" />
    </a>
    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <SocialIcon icon={faTwitter} title="Twitter" />
    </a>
</div>    <p>© 2024 Your Blog Website</p>
  </FooterContainer>
);

export default Footer;

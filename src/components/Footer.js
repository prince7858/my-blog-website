// components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  padding: 1rem;
  background: #222;
  text-align: center;
  color: white;
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
      <SocialIcon icon={faGithub} title="GitHub" />
      <SocialIcon icon={faLinkedin} title="LinkedIn" />
      <SocialIcon icon={faTwitter} title="Twitter" />
    </div>
  </FooterContainer>
);

export default Footer;

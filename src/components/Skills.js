// components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const SkillsContainer = styled.section`
  padding: 2rem;
  background-color: #f4f4f9;
  text-align: center;
`;

const SkillIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin: 1rem;
  color: #6c63ff;
`;

const Skills = () => (
  <SkillsContainer>
    <h2>Skills</h2>
    <div>
      <SkillIcon icon={faJsSquare} title="JavaScript" />
      <SkillIcon icon={faReact} title="React" />
      <SkillIcon icon={faHtml5} title="HTML5" />
      <SkillIcon icon={faCss3Alt} title="CSS3" />
    </div>
  </SkillsContainer>
);

export default Skills;

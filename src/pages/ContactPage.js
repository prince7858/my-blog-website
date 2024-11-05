// src/pages/ContactPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Textarea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background: #6c63ff;
  color: white;
  border: none;
  cursor: pointer;
`;

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${name} (${email}): ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          rows="4"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;

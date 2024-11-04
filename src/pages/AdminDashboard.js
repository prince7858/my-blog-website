// pages/AdminDashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background: #6c63ff;
  color: white;
  border: none;
  cursor: pointer;
`;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send data to the backend or update your state
    console.log('New Post:', { title, content });
    // Clear the form
    setTitle('');
    setContent('');
  };

  return (
    <DashboardContainer>
      <Title>Admin Dashboard</Title>
      <PostForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextArea
          rows="5"
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <SubmitButton type="submit">Create Post</SubmitButton>
      </PostForm>
    </DashboardContainer>
  );
};

export default AdminDashboard;

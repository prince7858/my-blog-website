// src/pages/AdminDashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';

const AdminContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
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

const PostList = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 1rem;
`;

const PostItem = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const AdminDashboard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPostId) {
      const updatedPosts = posts.map(post =>
        post.id === editingPostId ? { ...post, title, content } : post
      );
      setPosts(updatedPosts);
      setEditingPostId(null);
    } else {
      const newPost = { id: Date.now(), title, content };
      setPosts([...posts, newPost]);
    }
    setTitle('');
    setContent('');
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingPostId(post.id);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <AdminContainer>
      <h2>Admin Dashboard</h2>
      <PostForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          rows="5"
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">{editingPostId ? 'Update Post' : 'Create Post'}</Button>
      </PostForm>
      <PostList>
        {posts.map(post => (
          <PostItem key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Button onClick={() => handleEdit(post)}>Edit</Button>
            <Button onClick={() => handleDelete(post.id)}>Delete</Button>
          </PostItem>
        ))}
      </PostList>
    </AdminContainer>
  );
};

export default AdminDashboard;

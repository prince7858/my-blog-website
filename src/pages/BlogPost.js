// pages/BlogPost.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogPostContainer = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #6c63ff;
  text-align: center;
`;

const Content = styled.div`
  margin-top: 1rem;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #333;
`;

const GoBackButton = styled.button`
  margin: 2rem 0;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background: #6c63ff;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #5757d6;
  }
`;

const CommentSection = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const CommentInput = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background: #6c63ff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background: #5757d6;
  }
`;

const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.li`
  background: #f9f9f9;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 4px;
`;

const BlogPost = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const posts = [
    { id: '1', title: 'Understanding JavaScript Closures', content: 'Detailed content about closures...' },
    { id: '2', title: 'Styling Components in React', content: 'Detailed content about styling...' },
    { id: '3', title: 'Building Responsive Layouts', content: 'Detailed content about responsive design...' },
  ];

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <p style={{ textAlign: 'center' }} aria-live="polite">
        <strong>Post not found!</strong>
        <GoBackButton onClick={() => navigate('/')}>Go Back</GoBackButton>
      </p>
    );
  }  

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
      toast.success('Comment submitted successfully!');
    } else {
      toast.error('Please write a comment before submitting.');
    }
  };

  return (
    <BlogPostContainer>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 150)} />
      </Helmet>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <GoBackButton onClick={() => navigate('/')}>Go Back</GoBackButton>

      <CommentSection>
        <h3>Comments</h3>
        <CommentForm onSubmit={handleCommentSubmit}>
          <CommentInput
            rows="4"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </CommentForm>
        <CommentsList>
          {comments.map((comment, index) => (
            <CommentItem key={index}>{comment}</CommentItem>
          ))}
        </CommentsList>
      </CommentSection>

      <ToastContainer />
    </BlogPostContainer>
  );
};

export default BlogPost;

// components/BlogPreview.js
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogContainer = styled.section`
  padding: 2rem;
  background: #282c34;
  color: white;
`;

const BlogCard = styled.div`
  background: #333;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

const BlogTitle = styled.h3`
  color: #6c63ff;
`;

const BlogPreview = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      // Replace with your API endpoint
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          const transformedPosts = data.slice(0, 5).map(post => ({
            id: post.id,
            title: post.title,
            content: post.body,
          }));
          setPosts(transformedPosts);
        })
        .catch(error => console.error('Error fetching posts:', error));
}, []);

return (
    <BlogContainer>
      <h2>Latest Blog Posts</h2>
      {posts.map(post => (
        <BlogCard key={post.id}>
          <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <BlogTitle>{post.title}</BlogTitle>
            <p>{post.content}</p>
          </Link>
        </BlogCard>
      ))}
    </BlogContainer>
  );
};

export default BlogPreview;

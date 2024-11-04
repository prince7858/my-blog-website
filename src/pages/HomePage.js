// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(to bottom, #6c63ff, #3f3d56);
  color: white;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const BlogCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const HomePage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Understanding JavaScript Closures', content: 'Full article about closures...' },
    { id: 2, title: 'Styling Components in React', content: 'Full article about styling...' },
    { id: 3, title: 'Building Responsive Layouts', content: 'Full article about responsive design...' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [showTopBtn, setShowTopBtn] = useState(false);

useEffect(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  });
}, []);

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeContainer>
      <h1>Welcome You</h1>
      <p>Explore my latest posts on web development, frontend, and more!</p>
      
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '1rem 0', padding: '0.5rem', width: '80%', maxWidth: '400px' }}
      />

      <BlogContainer>
        {filteredPosts.map(post => (
          <BlogCard key={post.id}>
            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <BlogTitle>{post.title}</BlogTitle>
              <p>{post.content.substring(0, 100)}...</p>
            </Link>
          </BlogCard>
        ))}
      </BlogContainer>
      {showTopBtn && (
      <button onClick={goToTop} className="back-to-top">
        ↑
      </button>
      )}
    </HomeContainer>
  );
};

export default HomePage;

// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import AdminDashboard from './pages/AdminDashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import styled from 'styled-components';


// Create a Header Component
const Header = styled.header`
  background: #6c63ff;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Footer = styled.footer`
  background: #6c63ff;
  padding: 1rem;
  color: white;
  text-align: center;
`;

// Update App.js to include Header and Footer
function App() {
  return (
    <Router>
      <Header role="banner" aria-label="Blog Header">
        <h1>My Blog</h1>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer role="contentinfo" aria-label="Blog Footer">
        <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
      </Footer>
    </Router>
  );
}

export default App;

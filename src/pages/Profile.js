// pages/Profile.js
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 2rem;
  max-width: 400px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const Profile = () => {
  const user = { username: 'exampleUser' }; // Replace with actual user data

  return (
    <ProfileContainer>
      <Title>User Profile</Title>
      <p>Username: {user.username}</p>
      <p>Other user details can go here...</p>
      {/* Add logic for users to update their profile */}
    </ProfileContainer>
  );
};

export default Profile;

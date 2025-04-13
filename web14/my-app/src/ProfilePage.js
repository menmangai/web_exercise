import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import './App.css';

const ProfilePage = () => {
  const user = {
    name: 'Menmangai',
    email: 'menmangai@example.com',
    bio: 'Software Engineer with a passion for building scalable web applications.',
    imageUrl: 'https://via.placeholder.com/150',
    posts: [
      'Post 1: This is my first post!',
      'Post 2: Another day full of dread.',
      'Post 3: React is awesome!',
    ],
  };

  return (
    <div className="profile-page">
      <ProfileImage imageUrl="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;

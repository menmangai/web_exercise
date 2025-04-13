import React from 'react';

const ProfileImage = ({ imageUrl }) => {
  return (
    <div className="profile-image">
      <img src={imageUrl} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
    </div>
  );
};

export default ProfileImage;

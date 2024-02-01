// UserInfo.js
import React, { useEffect, useState } from 'react';
import '../styles/userinfoview.css';
import userimg from '../assets/user1.png';
import SocialMediaContact from './socialmediacontacts';

const UserInfo = () => {
  const [userData, setUserData] = useState(null);
  const usrimgurl = userData?.userImage;

  useEffect(() => {
    // Replace 'your-api-endpoint' 
    fetch(`https://flickapp.vercel.app/user/${window.location.pathname.slice(1, window.location.pathname.length)}`)
      .then(response => response.json())
      .then(data => {
        // Set the user data to the state
        setUserData(data.data);
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  if (userData.isActive === true) {
    setTimeout(() =>{
      alert('This account is private and cannot be viewed');
    }, 500)
    
    return null; // or render some alternative UI if needed
  }

  return (
    <div>
      <div className='overlay'>
        <div className='modal'>
          <div className='userimgcontainer'>
            {/* Add 'title' attribute to display image name on hover */}
            <img src={usrimgurl ? usrimgurl : userimg} alt={''} className='userimg' title='Click to view full image' />
          </div>
          <div className='usrdta'>
            <h1>{userData.name}</h1>
            <p className='profession'>{userData.profession}</p>
            <p>{userData.organization}</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
          {userData.socialMedia
  .filter((socialMedia) => socialMedia.isActive) 
  .map((socialMedia) => (
    <SocialMediaContact
      key={socialMedia._id}
      socialMediaType={socialMedia.socialMediaType}
      socialMediaName={socialMedia.socialMediaName}
      socialMediaLink={socialMedia.socialMediaLink}
      userDirectMode={userData.userDirectMode}
      socialMediaDirectMode={socialMedia.socialMediaDirectMode}
    />
  ))
}

  ))
}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

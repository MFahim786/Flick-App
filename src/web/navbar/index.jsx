import React from 'react';
import '../styles/navbar.css'; // Import your CSS file
import img from '../assets/user1.png'
const Index = () => {
    return (
      <div className="container">
        {/* Your Content Here */}
        <NavBar />
      </div>
    );
  };
  
  const NavBar = () => {
    return (
      <div className="navBar">
       
  
        {/* Center - Title or other content if needed */}
       
  
        {/* Right Side - Logo */}
        <img src={img} alt="Logo" className="logo" />

         {/* Left Side - User Display Picture */}
       
        
      </div>
    );
  };
  

export default Index;

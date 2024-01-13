import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {

    console.log('ddddddd')
    // Extract userId from the URL
    console.log();
    
    // Fetch user details from the API
    fetch(`https://flickapp.vercel.app/user/${window.location.pathname.slice(1,window.location.pathname.length)}`)
      .then(response => response.json())
      .then(data => {
        // Set the user data to the state
        setUserData(data.data);
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {userData ? (
          <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Profession: {userData.profession}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

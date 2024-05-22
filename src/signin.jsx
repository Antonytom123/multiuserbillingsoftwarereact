import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/fonts/material-icon/css/material-design-iconic-font.min.css'; 
import './assets/csslog/style.css'; // Update the path
import signinImage from './img/logreg/signin-image.jpg'; // Update the path

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // Example:
    // fetch('/loginurl', { method: 'POST', body: new FormData(e.target) })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       navigate('/somepath');
    //     } else {
    //       setMessages(data.messages);
    //     }
    //   });

    // For now, just logging to console
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="main" style={{ backgroundColor: 'rgba(225, 155, 24, 0.563)' }}>
      {messages.map((message, index) => (
        <label key={index} className="text-center" style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', width: '30%', color: 'white', textShadow: '2px 2px 4px #000000', padding: '10px', borderRadius: '10px', marginLeft: '52vw' }}>
          {message}
        </label>
      ))}
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure><img src={signinImage} alt="sign in" /></figure>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form className="login-form" id="login-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="username"><i className="zmdi zmdi-account material-icons-name"></i></label>
                  <input type="text" name="username" id="username" placeholder="Enter User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                  <input type="password" name="pass" id="pass" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;

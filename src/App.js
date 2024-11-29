import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import './components/style.css'
const App = () => {

  return (
    <Router>
    <div>
    <Header/>
    <div className='main'>
      <div className='content'>
      <h2>You deserve to be happy</h2>
      <h3>How A Therapy Chatbot Can<br></br> Provide Essential Healthcare Services</h3>
      <a  
      className="btn"
      href="https://novathon.vercel.app/chat"
    >
      Let's start
    </a>
      </div>
      <div className='bodyimg'><img src='bodyimg1.png'></img></div>
    </div>
  </div>
  </Router>
  );
};

export default App;

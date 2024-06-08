import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="content has-text-centered">
    <div className="is-flex
     is-flex-direction-column
     is-justify-content-end
     ">
      <p>
        <strong>Tutor Turtle</strong> by
        <a href="http://github.com/ppeterson609"> Patrick Peterson</a>,  
        <a href="https://github.com/mikenavarrete"> Michael Navarrete</a>, 
        <a href="http://github.com/julz-tm"> Julian Ortiz</a>, and
        <a href="https://github.com/JaysonNunez1"> Jayson Nunez </a>

      </p>
    </div>
    </div>
  </footer>
  );
};

export default Footer;
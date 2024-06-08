
import '../styles/Navbar.css'
import React from 'react';


function Navbar () {
  return (
    
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  
   

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href="/" className="navbar-item" id="logo-text">
        Tutor Turtle
      </a>


    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href="/signup" className="button is-primary">
            <strong>Student Sign up</strong>
          </a>
          <a href="/tutorsignup" className="button is-primary">
            <strong>Tutor Sign up</strong>
          </a>
          <a href="/login" className="button is-light">
          Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;


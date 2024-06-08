import React from 'react';
import 'bulma/css/bulma.css';
import '../styles/Signup.css';

export default function Signup() {
  return (
    <div>
        <div className="Header">
            <h1>Welcome to Tutor Turtle! Please enter your user info</h1>
                <br></br>
        </div>

     
            <label className="label">Name</label>
             <div className="field is-flex is-flex-direction-row is-justify-content-center">


             <input className="input  is-info is-rounded mb-5 custom-width" type="text" placeholder="e.g Alex Smith"/>

            </div>
            
            <label className="label">Email</label>
            <div className="field is-flex is-flex-direction-row is-justify-content-center">

          <input className="input  is-info is-rounded mb-5 custom-width" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            </div>

            <label className="label is-justify-content-left">Password</label>
            <div className="field is-flex is-flex-direction-row is-justify-content-center">
            <input
            className="input is-info is-rounded mb-5 custom-width"
            type="text"
            placeholder="Info input"
            />
            </div>
          

            <label className="label is-justify-content-left">Confirm Password</label>
            <div className="field is-flex is-flex-direction-row is-justify-content-center">
            <input 
            className="input is-info is-rounded mb-5 custom-width"
            type="text"
            placeholder="Rounded input"
            />
            </div>
            <button className="button">Submit</button>
           
        </div>


  );
}

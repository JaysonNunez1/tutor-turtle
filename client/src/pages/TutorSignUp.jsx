import React from 'react';
import 'bulma/css/bulma.css';
import '../styles/TutorSignUp.css';

export default function TutorSignUp() {
  return (

    <div>
           
        <div className="Header">

            <h1>Welcome to Tutor Turtle! Please enter your user info</h1>
                <br></br>
        </div>

           <label className="label">Name</label>
             <div className="field is-flex flex-direction-row is-justify-content-center">
             <input className="input  is-info is-rounded mb-5 custom-width" type="text" placeholder="e.g Alex Smith"/>

             </div>

            <label className="label">Email</label>
            <div className="field is-flex flex-direction-row is-justify-content-center">
          <input className="input  is-info is-rounded mb-5 custom-width" type="email" placeholder="e.g. alexsmith@gmail.com"/>

            </div>


            <label className="label is-justify-content-center">Password</label>
            <div className="field is-flex flex-direction-row is-justify-content-center">
            <input
            className="input is-info is-rounded mb-5 custom-width"
            type="text"
            placeholder="Info input"
            />

            </div>


            <label className="label is-justify-content-center">Confirm Password</label>
            <div className="field is-flex flex-direction-row is-justify-content-center">
            <input 
            className="input is-info is-rounded mb-5 custom-width"
            type="text"
            placeholder="Rounded input"
            />
     
            </div>


            <label className="label is-justify-content-center">What Subjects Would You Like To Teach?</label>
            <div className="field is-flex is-flex-direction-row is-justify-content-center is-justify-content-center">
            <div className="select">
            <select>
                <option>Select dropdown</option>
                <option>With options</option>
            </select>
            </div>
      
            </div>
            <br></br>

            <label className="label is-justify-content-center">Please Enter a Bio</label>
            <div className="field is-flex flex-direction-row is-justify-content-center">
            <textarea className="column is-half" placeholder="e.g. Hello world"></textarea>
        
            </div>
            <br /><br />
            <button className="button">Submit</button>
        </div>
  


  );
}

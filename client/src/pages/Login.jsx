import React from 'react';
import 'bulma/css/bulma.css';
import '../styles/Login.css';

export default function Login() {
    return (<div>
      <div className="login-field is-flex is-flex-direction-column is-align-items-center is-justify-content-center full-height pb-6">
        <label className="label is-justify-content-left">Confirm Password</label>
              <div className="field is-flex flex-direction-row is-justify-content-center">
              <input 
              className="input is-info is-rounded mb-5 custom-width "
              type="text"
              placeholder="Rounded input"
              />
         
              </div>

              <label className="label is-justify-content-left">Confirm Password</label>
              <div className="field is-flex flex-direction-row is-justify-content-center">
              <input 
              className="input is-info is-rounded mb-5 custom-width "
              type="text"
              placeholder="Rounded input"
              />
         
              </div>
              <button className="button">Login</button>
      </div>



    </div>)
}



import React, { useState } from 'react';
import '../styles/Home.css';
import pic1 from '../components/images/pic1.jpg';
import pic2 from '../components/images/pic2.jpg';
import pic3 from '../components/images/pic3.jpg';
import kidStudying from '../components/images/kid-studying.jpg';
import girlWriting from '../components/images/girl-writing.jpg';
import computerStudying from '../components/images/computer-studying2.jpg';
import testimonial1 from '../components/images/testimonial1.jpg';
import testimonial2 from '../components/images/testimonial2.jpg';
import testimonial3 from '../components/images/testimonial3.jpg';
import Logo from '../components/images/Logo.png';


const subjects = [
  { icon: 'X', name: 'Spanish' },
  { icon: 'English', name: 'English' },
  { icon: 'History', name: 'History' },
  { icon: 'Piano', name: 'Piano' },
  { icon: '√x', name: 'Mathematics' },
  { icon: 'Chemistry', name: 'Chemistry' },
  { icon: 'guitar', name: 'Guitar' },
  { icon: '📊', name: 'Statistics' },
];
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredSubjects = searchTerm
    ? subjects.filter((subject) => subject.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : subjects;
  return (
    <div className="Home">
    
      <main className="main">
        <h2 className="title">"Unlock Your Learning Shell with Tutor Turtle!"</h2>
        <br></br> 
        <h3 className="search-text">"Pick a Subject!"</h3>
     
        <div className="search-bar">
          <input className="search" type="text" value={searchTerm} onChange={handleSearch} placeholder="What would you like to learn?" />
          <button type="button" className='button'>Search</button>
        </div>
    
        <br></br><br></br>
        <div className='logoContainer'>
        <img
        className='logo'
        src={Logo}
        alt="Placeholder image"
        style={{ objectFit: 'cover' }}
      />
      </div>
      <div className= "picsLeft">
        
        <img className="left" src={pic1} alt="Decorative right" />
        <img className="left" src={pic2} alt="Decorative right" />
        <img className="left" src={pic3} alt="Decorative right" />
      </div>
      <div className= "picsRight">
      <img className="right" src={kidStudying} alt="Decorative right" />
        <img className="right" src={girlWriting} alt="Decorative right" />
        <img className="right" src={computerStudying} alt="Decorative right" />
      </div>
      
      <div className='columns is-flex is-justify-content-center is-centered'>
      <div className='testimonial column is-one-fifth'>
  <div className="card-image">
    <figure className="image is-4by3">
      <img
        src={testimonial1}
        alt="Placeholder image"
        style={{ objectFit: 'cover' }}
      />
    </figure>
  </div>
 
    

    <div className="TestimonalText content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iacu
      <br />

  

</div>
        </div>  
      <div className='testimonial column is-one-fifth '>

  <div className="card-image">
    <figure className=" image is-4by3">
      <img
        src={testimonial2}
        alt="Placeholder image"
        style={{ objectFit: 'cover' }}
      />
    </figure>
  </div>
    <div className="TestimonalText content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iacu
      <br />


</div>
        </div>  
      <div className='testimonial column is-one-fifth'>
   
  <div className="card-image">
    <figure className="image is-4by3">
      <img
        src={testimonial3}
        alt="Placeholder image"
        style={{ objectFit: 'cover' }}
      />
    </figure>
  </div>
 
    

    <div className="TestimonalText content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iacu
      <br />



</div>
        </div>  
  

      </div>

      </main>

    </div>
  );
}

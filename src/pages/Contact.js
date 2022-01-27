import React from 'react';
import Smoothie from '../assets/smoothie.jpg';
import "../styles/Contact.css";


function Contact() {
  return <div className="contact">

<div classame="leftSide" style={{ backgroundImage: `url(${Smoothie})`}}></div>
<div className="rightSide">

<h1>Contact us</h1>

<form id="contact-form" method="POST">

<label htmlFor>full name</label>
<input name="name"  placeholder="Enter full name..." type="text"/>

<label htmlFor="email">Email</label>
<input name="email"  placeholder="Enter email..." type="email"/>

<label htmlFor="message">fMessage</label>
<textarea rows="6" placeholder="Enter message" name="message" required></textarea>
<button type="submit"Send message></button>
</form>

</div>
  </div>;
}

export default Contact;

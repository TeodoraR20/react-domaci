import React from 'react';
import image from "../galerija/slika18.jpg";
import "../styles/About.css";

const About = () => {
  return <div className="about">

<div className="aboutTop" 
style={{backgroundImage: `url(${image})`}}
> </div>

<div className="aboutBottom">

<h1>O smutiju</h1>

<p>Smuti ili Smoothie je voćni napitak koji je mnogima postao omiljeni doručak, ne samo zbog svog osvežavajućeg ukusa, već i zbog svih zdravstvenih benefita koje nosi sa sobom.

Posle skoro jednog veka razvoja i sticanja popularnosti, osmišljeni su čitavi programi ishrane zasnovani na smutijima. Ovi ukusni kokteli uključeni su u ishranu gotovo svake osobe koja brine o svom zdravlju.</p>

</div>

  </div>;
};

export default About;

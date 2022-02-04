import React, { useState }from 'react';
import Logo from '../assets/smoothiebar.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import "../styles/Home.css";


function Navbar() {
const [openLinks, setOpenLinks] = useState(false); 

  return <div className="navbar">

<div className="leftSide" id={openLinks ? "open" : "close"}>

<img src={Logo} 


/>

</div>


<div className="rightSide">

<Link to="/">Početna</Link>
<Link to="/search">Meni</Link>
<Link to="/about">Smoothie</Link>
<Link to="/slider">Galerija</Link>
<Link to="/contact">Kontakt</Link>




</div>
  </div>;
}

export default Navbar;

import React, { useState }from 'react';
import Logo from '../assets/smoothie.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import "../styles/Home.css";


function Navbar() {
const [openLinks, setOpenLinks] = useState(false); 

  return <div className="navbar">

<div className="leftSide" id={openLinks ? "open" : "close"}>

<img src={Logo} />

</div>


<div className="rightSide">

<Link to="/">Home</Link>
<Link to="/menu">Menu</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>



</div>
  </div>;
}

export default Navbar;

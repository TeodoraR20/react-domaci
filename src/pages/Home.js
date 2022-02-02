import React from 'react';
import { Link } from "react-router-dom";
 import Image from '../assets/naslovna.jpg';


function Home() {
  return <div className="home" style={{ backgroundImage: `url(${Image})`}}>

     <div className="headerContainer" >

<h1>Smoothie mix</h1>
<p></p>
<p>Za svačiji ukus</p>
<Link to="/search">
<button>Meni</button>
</Link>
     </div>
  </div>;
}

export default Home;

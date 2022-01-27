import React from 'react';
import { Link } from "react-router-dom";
 import BannerImage from '../assets/smoothie.jpg';


function Home() {
  return <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>

     <div className="headerContainer" >

<h1>Smoothie mix</h1>
<p>Za svaciji ukus</p>
<Link to="/menu">
<button>Narucite sada</button>
</Link>
     </div>
  </div>;
}

export default Home;

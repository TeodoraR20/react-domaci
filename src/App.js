
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import ImageSlider from "./pages/ImageSlider";
import { SliderData } from "./components/SliderData";


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/search" element={<Search/>}/>

<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>

<Route path="/slider" element={<ImageSlider slides={ SliderData }/>}/>

</Routes>
<Footer/>
</Router>

    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componenets/navbar";
import Hero from "./componenets/hero";
import Plans from "./componenets/plans";
import Gallery from "./componenets/gallery";
import Contact from "./componenets/contact";
import Footer from "./componenets/footer";
import About from './componenets/about';

function App() {
  return (
    <Router>
      <Navbar />
       <Hero></Hero>
      <Plans></Plans>
      <Gallery></Gallery>
      <About></About>
      <Contact></Contact>
       <Footer></Footer>
    </Router>
  );
}

export default App;


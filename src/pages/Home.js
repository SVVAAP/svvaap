// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import Hero from '../components/hero';

function Home(props)  {

  return (

  <div>
    <NavBar />
    <Hero/>
    <Footer/>
   
  </div>
);
}

export default Home;
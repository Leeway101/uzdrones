import React from 'react';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;

import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden h-[4000px]'>
      <Header />
      <div className='space-y-20'>
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      </div>
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;

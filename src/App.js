import React from 'react';
import NavigationBar from './layout/NavigationBar'
import HeroSection from './layout/HeroSection'
import CardSection from './layout/CardSection'
import WhatWeOffer from './layout/WhatWeOffer';
import FooterBar from './layout/FooterBar';
import ContactUs from './layout/ContactUs'
import Featured from './layout/Featured'

import './App.css';
import Community from './layout/Community';


function App() {
  return (
    <div>
    
      <NavigationBar />
      <HeroSection />
      <CardSection />
      <WhatWeOffer />
      <Community />
      <Featured />
      <ContactUs />
      <FooterBar />
      

    </div>
  );
}

export default App;

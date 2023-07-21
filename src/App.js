import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Hero from './components/Hero';
import Card from './components/Card';
import Food from './components/Food';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Payment/> */}
      <Hero/>
      <Card/>
      <Food/>
    </div>
  );
}

export default App;

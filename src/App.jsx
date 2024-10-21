import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';

const App = () => {
  return (
    <main className="overflow-hidden">
      {/* overflow-hidden will hide the scroll bar */}
      <Header/>
      <Hero/>
      <Features/>
    </main>
  )
}
export default App;
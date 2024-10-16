import React from 'react';

import './App.css'
import Header from './sections/Header';
import Hero from './sections/Hero';

const App = () => {
  return (
    <main className="overflow-hidden">
      {/* overflow-hidden will hide the scroll bar */}
      <Header/>
      <Hero/>
    </main>
  )
}
export default App;
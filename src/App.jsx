import React from 'react';

import './App.css'
import Header from './sections/Header';

const App = () => {
  return (
    <main className="overflow-hidden">
      {/* overflow-hidden will hide the scroll bar */}
      <Header/>
    </main>
  )
}
export default App;
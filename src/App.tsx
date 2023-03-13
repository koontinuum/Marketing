import React from 'react';
import './App.css';
import Team from './components/Team/Team';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <HomePage/>
     
      </div>
      <Team/>
      
    </div>
  );
}

export default App;

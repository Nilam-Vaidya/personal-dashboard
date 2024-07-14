import React from 'react';
import Weather from './components/Weather';
import News from './components/News';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Dashboard</h1>
      </header>
      <main>
        <Weather />
        <News />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> WeatherEase
            </div>
            <span className="subtitle" style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>
              Powered by KAVIA AI
            </span>
          </div>
        </div>
      </nav>

      <main>
        <MainContainer />
      </main>
    </div>
  );
}

export default App;

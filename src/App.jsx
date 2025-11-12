import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🚀 React + Electron</h1>
      <p>Uygulamamız çalışıyor!</p>
      <div>
        <p>Platform: {window.process?.platform || 'browser'}</p>
        <p>Node.js: {window.process?.versions?.node || 'yok'}</p>
        <p>Electron: {window.process?.versions?.electron || 'yok'}</p>
      </div>
    </div>
  );
}

export default App;

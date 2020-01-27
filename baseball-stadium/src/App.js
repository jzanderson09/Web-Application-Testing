import React, { useState } from 'react';
import './App.scss';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [stats, setStats] = useState({ balls: 0, strikes: 0 });
  return (
    <div className="App">
      <h1>App!</h1>
      <Display stats={stats} />
      <Dashboard />
    </div>
  );
}

export default App;

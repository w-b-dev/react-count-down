import React from 'react';
import './App.css';
import Display from './components/Display';
import SetDate from './components/SetDate';

function App() {
  const targetDate = 'Jan 17, 2021 12:34:56';

  return (
    <div className="App">
      <Display targetDate={targetDate} />
      <SetDate targetDate={targetDate} />
    </div>
  );
}

export default App;

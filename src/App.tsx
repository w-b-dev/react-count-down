import React, { SyntheticEvent, useState } from 'react';
import './App.css';
import Display from './components/Display';
import SetDate from './components/SetDate';

function App() {
  const dateInput = 'Jan 17, 2021 12:34:56';
  const [date, setDate] = useState(dateInput);
  const handleUpdate = (e: string) => {
    setDate(e);
  };
  return (
    <div className="App">
      <Display targetDate={date} onUpdate={handleUpdate} />
      <SetDate targetDate={date} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;

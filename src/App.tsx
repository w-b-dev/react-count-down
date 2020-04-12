import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import DateControl from './components/DateControl';
import { DateType, StateType } from './components/interfaces';

const mockState: DateType = {
  day: '27',
  month: 'Jun',
  year: '2020',
};

function App() {
  const TIME = '23:59:59';
  const createDate = (d: DateType) => `${d.month} ${d.day}, ${d.year} ${TIME}`;
  const [state, setState] = useState<StateType>({
    dateMonthYear: mockState,
    dateString: createDate(mockState),
  });
  const handleUpdate = (t: DateType) => {
    const received = { ...t };
    setState({ dateString: createDate(received), dateMonthYear: received });
  };

  return (
    <div className="App">
      <Display dateState={state} onUpdate={handleUpdate} />
      <DateControl dateState={state} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;

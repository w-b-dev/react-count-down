import React, { useState } from 'react';
import './App.css';
import { DateType, StateType } from './components/interfaces';
import Card from './components/Card';

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
    editMode: false,
  });
  const handleUpdate = (t: DateType) => {
    const received = { ...t };
    setState({
      dateString: createDate(received),
      dateMonthYear: received,
      editMode: state.editMode,
    });
  };

  const handleClick = () => {
    setState({ ...state, editMode: !state.editMode });
  };

  return (
    <div className="App">
      <Card
        state={state}
        handleUpdate={handleUpdate}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;

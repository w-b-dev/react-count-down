import React, { useState } from 'react';
import './App.css';
import CardsGrid from '../CardsGrid';
import { mockResponse } from '../../data/mocks'

function App() {
  const [state, setState] = useState(mockResponse);
  const handleClick = (id: string) => {
    console.log(`update task: ${id}`);
    const newResponse = mockResponse.map(e => {
      if (e.id === id) { e.selected = !e.selected };
      return e;
    })
    setState(newResponse);
  }
  return (
    <React.Fragment>
      <CardsGrid cards={state} handleClick={(s) => handleClick(s)} />
    </React.Fragment>
  );
}

export default App;

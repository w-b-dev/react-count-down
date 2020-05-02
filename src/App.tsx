import React, { useEffect, useState } from 'react';
import './App.css';
import { StateType } from './components/interfaces';
import CardsGrid from './components/CardsGrid';
import Header from './components/Header';
import { emptyState, mockResponse } from './mocks';

function App() {
  const getInitialState = () => {
    return JSON.parse(window.localStorage.getItem('state')!) || emptyState;
  };
  const [state, setState] = useState<StateType>(getInitialState);
  if (state === emptyState) {
    const newState = { ...emptyState, items: mockResponse };
    setState(newState);
    window.localStorage.setItem('state', JSON.stringify(newState));
  }
  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state));
    setState(state);
  }, [state]);

  const updateState = (e: StateType) => {
    setState(e);
  };
  return (
    <div className="App" title="main container for App component">
      <Header state={state} updateState={updateState} />
      <CardsGrid state={state} updateState={updateState} />
    </div>
  );
}

export default App;

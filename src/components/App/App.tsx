import React, { useEffect, useState } from 'react';
import './App.css';
import { emptyState, mockResponse } from '../../data/mocks';
import { StateType } from '../interfaces';
import OpenCardArea from '../OpenCardArea';
import CardsGrid from '../CardsGrid';
import FooterControls from '../FooterControls';

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
    state.selectedItem = '';
  });

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state));
    setState(state);
  }, [state]);

  const updateState = (e: StateType) => {
    setState(e);
  };
  return (
    <React.Fragment>
      <OpenCardArea state={state} updateState={updateState} />
      <CardsGrid state={state} updateState={updateState} />
      <FooterControls state={state} updateState={updateState} />
    </React.Fragment>
  );
}

export default App;

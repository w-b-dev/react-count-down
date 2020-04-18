import React, { useEffect, useState } from 'react';
import './App.css';
import { CardType, CardsType, StateType } from './components/interfaces';
import CardsGrid from './components/CardsGrid';

const mockResponse: CardsType = [
  {
    id: '8912830912830',
    title: "Someone's birthday",
    day: '27',
    month: 'Jun',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '367234548682348',
    title: '2nd meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '367345345248682348',
    title: '3rd meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '3245345',
    title: '4th meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '3245345345',
    title: 'safd meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '3453452345',
    title: 'dfdf meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '2345345',
    title: 'ewrw meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '34534523',
    title: 'xcv meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '345324532',
    title: 'sdfs meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '435245',
    title: 'xcv meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
  {
    id: '36724868',
    title: 'wer meeting with X',
    day: '14',
    month: 'May',
    year: '2020',
    dateString: '',
    editMode: false,
  },
];
const TIME = '23:59:59';

export const createDate = (d: CardType) =>
  `${d.month} ${d.day}, ${d.year} ${TIME}`;

const runCreateDate = (state: StateType) => {
  const newState = { ...state };
  // include in the state a locally computed value
  newState.items.forEach((e) => (e.dateString = createDate(e)));
  return newState;
};

function App() {
  const [state, setState] = useState<StateType>({
    items: mockResponse,
    selectedItem: null,
  });

  useEffect(() => {
    setState((state) => runCreateDate(state));
  }, [state.selectedItem]);

  const updateState = (e: StateType) => {
    setState(e);
  };
  return (
    <div className="App">
      <CardsGrid state={state} updateState={updateState} />
    </div>
  );
}

export default App;

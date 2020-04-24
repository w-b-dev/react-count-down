import React from 'react';
import './CardsGrid.css';
import Card from '../Card';
import { CardType, State } from '../interfaces';
import { createDate } from '../../App';

const CardsGrid = ({ state, updateState }: State): any => {
  const handleUpdate = (cardState: CardType) => {
    const _state = { ...state };
    cardState.dateString = createDate(cardState);
    if (cardState.editMode === true) {
      // Updates what IS BEING EDITED
      _state.selectedItem = cardState.id;
      _state.items.forEach((e) =>
        e.id !== cardState.id ? (e.editMode = false) : null
      );
    }
    const mapped = _state.items.map((e) => {
      if (e.id === cardState.id) {
        return cardState;
      } else {
        return e;
      }
    });
    _state.items = mapped;
    updateState(_state);
  };
  const renderCards =
    state && state.items
      ? state.items.map((e) => {
          return <Card key={e.id} cardState={e} handleClick={handleUpdate} />;
        })
      : null;
  return <div className="CardsGrid">{renderCards}</div>;
};
export default CardsGrid;

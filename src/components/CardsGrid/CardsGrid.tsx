import React from 'react';
import './CardsGrid.css';
import Card from '../Card';
import { CardType, State } from '../interfaces';
import { createDateString } from '../../helper';

const CardsGrid = ({ state, updateState }: State): any => {
  const handleUpdate = (cardState: CardType) => {
    const _state = { ...state };
    cardState.dateString = createDateString(cardState);
    if (cardState.editMode === true) {
      // Updates what IS BEING EDITED
      _state.selectedItem = cardState.id;
      _state.items.forEach((e) =>
        e.id !== cardState.id ? (e.editMode = false) : null
      );
    }
    /*Let's delete an entry*/
    let deletedEl = -1;
    const mapped = _state.items.map((e, i) => {
      if (e.id === cardState.id) {
        if (cardState.title === 'DELETE') {
          deletedEl = i;
        } else {
          return cardState;
        }
      }

      return e;
    });
    if (deletedEl !== -1) {
      mapped.splice(deletedEl, 1);
    }
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

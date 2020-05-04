import React from 'react';
import './CardsGrid.css';
import Card from '../Card';
import { CardType, State } from '../interfaces';
import {createDateString} from '../../helper';
import {calculateTimeGap} from "../Display/Display";

const CardsGrid = ({ state, updateState }: State): any => {
  const handleUpdate = (cardState: CardType) => {
    const _state = { ...state };
    cardState.dateString = createDateString(cardState);
    if (cardState.editMode) {
      // Updates what IS BEING EDITED
      _state.selectedItem = cardState.id;
      _state.items.forEach((e) =>
        e.id !== cardState.id ? (e.editMode = false) : null
      );
    }
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
    const cardsNotSorted =
        state && state.items
            ? state.items.map((e) => {
                return <Card key={e.id} cardState={e} handleClick={handleUpdate}/>;
            })
            : null;
    cardsNotSorted?.sort((a, b): number => {
        const cA = calculateTimeGap(a.props.cardState);
        const cB = calculateTimeGap(b.props.cardState);
        if (cA > cB) return 1;
        if (cA < cB) return -1;
        return 0;
    })
    return <div className="CardsGrid">{cardsNotSorted}</div>;
};
export default CardsGrid;

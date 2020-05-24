import React from 'react';
import './OpenCardArea.css';
import { CardType, State } from '../interfaces';
import DateControl from '../DateControl';
import { createDateString } from '../../helpers/helper';

const OpenCardArea = ({ state, updateState }: State) => {
  const handleUpdate = (cardState: CardType, selectedItem?: string) => {
    const _state = { ...state };
    if (selectedItem) {
      //  Update only the selectedItem property
      _state.selectedItem === selectedItem
        ? (_state.selectedItem = '')
        : (_state.selectedItem = selectedItem);
    } else {
      // Update everything else
      cardState.dateString = createDateString(cardState);
      if (cardState.editMode) {
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
    }
    updateState(_state);
  };
  // This will always return a value --- !
  const _cardState = state.items.find((e) => e.id === state.selectedItem)!;
  const openEditMode = () => {
    const _state = { ...state };
    const index = _state.items.findIndex((e) => e.id === _cardState.id);
    _cardState.editMode = true;
    _state.items[index] = _cardState;
    updateState(_state);
  };
  return (
    <section className="OpenCardArea">
      {_cardState ? (
        !_cardState.editMode ? (
          <section>
            <p>Title: {_cardState.title}</p>
            <input type="button" onClick={openEditMode} value="Edit" />
          </section>
        ) : (
          <DateControl cardState={_cardState} handleClick={handleUpdate} />
        )
      ) : (
        'Try selecting an entry'
      )}
    </section>
  );
};

export default OpenCardArea;

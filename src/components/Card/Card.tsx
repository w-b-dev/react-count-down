import React from 'react';
import DateControl from '../DateControl';
import Display from '../Display';
import { CardProps } from '../interfaces';

const Card = ({ state, handleUpdate, handleClick }: CardProps) => {
  if (state.editMode) {
    return (
      <DateControl
        dateState={state}
        onUpdate={handleUpdate}
        onClose={handleClick}
      />
    );
  } else {
    return (
      <Display
        dateState={state}
        onUpdate={handleUpdate}
        onClick={handleClick}
      />
    );
  }
};

export default Card;

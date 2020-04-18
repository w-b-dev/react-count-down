import React from 'react';
import DateControl from '../DateControl';
import Display from '../Display';
import { CardProps } from '../interfaces';
import './Card.css';

const Card = ({ cardState, handleClick }: CardProps) => {
  return (
    <article className="Card">
      {cardState.editMode ? (
        <DateControl cardState={cardState} handleClick={handleClick} />
      ) : (
        <Display cardState={cardState} handleClick={handleClick} />
      )}
    </article>
  );
};

export default Card;

import React from 'react';
import DateControl from '../DateControl';
import Display from '../Display';
import { CardProps } from '../interfaces';
import './Card.css';

const Card = ({ cardState, handleClick }: CardProps) => {
  const deleteCard = () => {
    const idLessCard = { ...cardState, title: 'DELETE' };
    handleClick(idLessCard);
  };
  return (
    <article className="Card">
      <section>
        <input type="button" value="Delete" onClick={deleteCard} />
      </section>
      {cardState.editMode ? (
        <DateControl cardState={cardState} handleClick={handleClick} />
      ) : (
        <Display cardState={cardState} handleClick={handleClick} />
      )}
    </article>
  );
};

export default Card;

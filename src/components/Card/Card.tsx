import React from 'react';
import Display from '../Display';
import { CardProps } from '../interfaces';
import './Card.css';

const Card = ({ cardState, handleClick }: CardProps) => {
  /*const updateCard = (mode: boolean) => {
    const state = { ...cardState, editMode: mode };
    handleClick(state);
  };*/
  return (
    <article className={`Card flex-col`}>
      {/*<article className={`Card flex-col ${cardState.editMode ? 'opened' : ''}`}>*/}
      {/*<section className="card-header flex space-around">
        <form className="card-controls">
          {!cardState.editMode && (
            <input
              className="card-update"
              type="button"
              value="⚙️"
              onClick={() => updateCard(true)}
              aria-label="open settings"
            />
          )}
          (
          <input
              className="card-update"
              type="button"
              value="❎️"
              onClick={() => updateCard(false)}
              aria-label="close settings"
          />
          )
        </form>
      </section>*/}
      <Display cardState={cardState} handleClick={handleClick} />
    </article>
  );
};

export default Card;

import React from 'react';
import './Display.css';
import { CardProps } from '../interfaces';

const Display = ({ cardState, handleClick }: CardProps) => {
  const countDownDate = new Date(cardState.dateString).getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const now = new Date().getTime();
  const timeGap = Math.floor((countDownDate - now) / oneDayInMs);

  const decideMessage = () => {
    return timeGap > 0 ? 'days to go' : 'days have passed';
  };

  const message = decideMessage();

  const _handleClick = () => {
    cardState.editMode = true;
    // TODO: refactor to execute this the complete state isn't needed
    // const target: HTMLElement = e.currentTarget as HTMLElement;
    // const id = target.getAttribute('data-attribute-id') || '0000';
    handleClick(cardState);
  };

  return (
    <section
      id={`card_${cardState.id}`}
      data-attribute-id={cardState.id}
      className="Display"
      title="countdown display"
      onClick={_handleClick}
    >
      <div className="title">{cardState.title}</div>

      <div className="countdown-message">
        {timeGap === 0
          ? 'Today is the day!!!'
          : `${timeGap.toString()} ${message}`}
      </div>
    </section>
  );
};

export default Display;

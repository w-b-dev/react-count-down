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

  return (
    <section
      id={`card_${cardState.id}`}
      data-attribute-id={cardState.id}
      className="Display"
      title="countdown display"
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

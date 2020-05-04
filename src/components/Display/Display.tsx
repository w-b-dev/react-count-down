import React from 'react';
import './Display.css';
import { CardProps } from '../interfaces';

const Display = ({ cardState, handleClick }: CardProps) => {
  const countDownDate = new Date(cardState.dateString).getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const now = new Date().getTime();
  const timeGap = Math.floor((countDownDate - now) / oneDayInMs);

  const decideMessage = ({
    amount,
    scale,
  }: {
    amount: number;
    scale: string;
  }) => {
    return timeGap > 0
      ? `${amount} ${scale} to go`
      : `${amount} ${scale} have passed`;
  };

  const conditionalValue = () => {
    if (timeGap < 14) return { amount: timeGap, scale: 'days' };
    if (timeGap < 4 * 30)
      return { amount: Math.round(timeGap / 7), scale: 'weeks' };
    if (timeGap < 24 * 30)
      return { amount: Math.round(timeGap / 30), scale: 'months' };
    if (timeGap < 240 * 30)
      return { amount: Math.round(timeGap / 360), scale: 'years' };
    return { amount: Math.round(timeGap / 3600), scale: 'decades' };
  };
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
          : `${decideMessage(conditionalValue())}`}
      </div>
    </section>
  );
};

export default Display;

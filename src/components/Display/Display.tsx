import React from 'react';
import './Display.css';
import {CardProps, CardType} from '../interfaces';

export const calculateTimeGap = (state: CardType) => {
  const countDownDate = new Date(state.dateString).getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const now = new Date().getTime();
  return  Math.floor((countDownDate - now) / oneDayInMs);
}

const Display = ({ cardState }: CardProps) => {
  const timeGap = calculateTimeGap(cardState);

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
    const timeGapAbsolute = Math.abs(timeGap);
    if (timeGapAbsolute < 14) return { amount: timeGapAbsolute, scale: 'days' };
    if (timeGapAbsolute < 4 * 30)
      return { amount: Math.round(timeGapAbsolute / 7), scale: 'weeks' };
    if (timeGapAbsolute < 24 * 30)
      return { amount: Math.round(timeGapAbsolute / 30), scale: 'months' };
    if (timeGapAbsolute < 240 * 30)
      return { amount: Math.round(timeGapAbsolute / 360), scale: 'years' };
    return { amount: Math.round(timeGapAbsolute / 3600), scale: 'decades' };
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

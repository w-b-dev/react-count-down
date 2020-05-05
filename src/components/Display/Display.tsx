import React from 'react';
import './Display.css';
import { CardProps, CardType } from '../interfaces';

export const calculateTimeGap = (state: CardType) => {
  const countDownDate = new Date(state.dateString).getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const now = new Date().getTime();
  return Math.floor((countDownDate - now) / oneDayInMs);
};

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
      ? [amount, scale, 'to go until']
      : [amount, scale, 'have passed since'];
  };

  const Time = () => {
    const [amount, scale, phrase] = decideMessage(conditionalValue());
    return (
      <div className="countdown-message">
        {timeGap === 0 ? (
          <span className="today">Today is the day!!!</span>
        ) : (
          <>
            <span className="time-amount">{amount}</span>
            <div className="wrapper">
              <span className="time-scale">{scale}</span>
              <span className="time-complement">{phrase}</span>
            </div>
          </>
        )}
      </div>
    );
  };

  const conditionalValue = () => {
    const timeGapAbsolute = Math.abs(timeGap);
    if (timeGapAbsolute < 14) return { amount: timeGapAbsolute, scale: 'days' };
    if (timeGapAbsolute < 4 * 30)
      return { amount: Math.round(timeGapAbsolute / 7), scale: 'weeks' };
    if (timeGapAbsolute < 24 * 30)
      return { amount: Math.round(timeGapAbsolute / 30), scale: 'months' };
    // defaults to years
    // TODO: CHECK ISSUE WITH CUMULATIVE IMPRECISION DUE TO ROUNDING AND PREMISES
    // Example: Should not be considering all months to be 30 days and all years 365.
    return {
      amount: Math.trunc((timeGapAbsolute / 365) * 10) / 10,
      scale: 'years',
    };
  };
  return (
    <section
      id={`card_${cardState.id}`}
      data-attribute-id={cardState.id}
      className="Display"
      title="countdown display"
    >
      <Time />
      <div className="card-description">
        <span className="icon"> 💬 </span>
        <span className="title">{cardState.title}</span>
        <span className="icon"> 📅 </span>
        <span id={cardState.id} className="card-date">
          {cardState.dateString
            .split(' ')
            .slice(0, cardState.dateString.split(' ').length - 1)
            .join(' ')}
        </span>
      </div>
    </section>
  );
};

export default Display;

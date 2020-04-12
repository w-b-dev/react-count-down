import React from 'react';
import './Display.css';
import { DisplayProps } from './interfaces';

const Display = ({ dateState }: DisplayProps) => {
  const countDownDate = new Date(dateState.dateString).getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const now = new Date().getTime();
  let timeGap = Math.floor((countDownDate - now) / oneDayInMs);

  const decideMessage = () => {
    return timeGap > 0
      ? 'days to go'
      : timeGap < 0
      ? 'days have passed'
      : 'days - today is THE day!!';
  };

  const message = decideMessage();

  return (
    <section className="display" title="countdown display">
      <span>
        {timeGap.toString()} {message}
      </span>
    </section>
  );
};

export default Display;

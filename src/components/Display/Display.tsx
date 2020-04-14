import React from 'react';
import './Display.css';
import { DisplayProps } from '../interfaces';

const Display = ({ dateState, onClick }: DisplayProps) => {
  const countDownDate = new Date(dateState.dateString).getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const now = new Date().getTime();
  const timeGap = Math.floor((countDownDate - now) / oneDayInMs);

  const decideMessage = () => {
    return timeGap > 0 ? 'days to go' : 'days have passed';
  };

  const message = decideMessage();

  return (
    <section className="display" title="countdown display" onClick={onClick}>
      {timeGap === 0 && <span>Today is the day!!!</span>}

      {timeGap !== 0 && (
        <span>
          {timeGap.toString()} {message}
        </span>
      )}
    </section>
  );
};

export default Display;

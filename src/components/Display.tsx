import React from 'react';
import './Display.css';
import { DisplayProps } from './interfaces';

const Display = ({ dateState }: DisplayProps) => {
  const countDownDate = new Date(dateState.dateString).getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const now = new Date().getTime();
  let timeGap = Math.floor((countDownDate - now) / oneDayInMs);

  return (
    <section className="display" title="countdown display">
      <span>{timeGap.toString()} days to go</span>
    </section>
  );
};

export default Display;

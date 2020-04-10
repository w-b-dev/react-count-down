import React, { useEffect, useState } from 'react';
import './Display.css';

interface DisplayProps {
  targetDate: string;
}

const Display = ({ targetDate }: DisplayProps) => {
  const countDownDate = new Date(targetDate).getTime();
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

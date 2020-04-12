import React, { ChangeEvent, useEffect, useState } from 'react';
import './DateControl.css';
import { DateType, DisplayProps } from './interfaces';

const DateControl = ({ dateState, onUpdate }: DisplayProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="setDate" title="countdown input section">
      {isOpen ? (
        <DateSegments
          dateState={dateState}
          onUpdate={onUpdate}
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <input
          type="button"
          onClick={() => setIsOpen(true)}
          value={dateState.dateString}
          className="dateAsButton"
        />
      )}
    </footer>
  );
};

const DateSegments = ({ dateState, onUpdate, onClose }: DisplayProps) => {
  const [day, setDay] = useState<string>(dateState.dateMonthYear.day);
  const [month, setMonth] = useState<string>(dateState.dateMonthYear.month);
  const [year, setYear] = useState<string>(dateState.dateMonthYear.year);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === 'day') setDay(e.target.value);
    if (e.target.name === 'month') setMonth(e.target.value);
    if (e.target.name === 'year') setYear(e.target.value);
  };

  const handleClick = () => (onClose ? onClose() : null);

  useEffect(() => {
    const s: DateType = { day, month, year };
    onUpdate(s);
  }, [day, month, year]);

  const renderNumberedSlots = (
    size: number,
    target: string,
    start: number,
    yearsList?: string[]
  ) => {
    const _ = new Array(size).fill('');
    _.forEach(
      (e, i) =>
        (_[i] = (
          <option key={start + i} value={yearsList ? yearsList[i] : start + i}>
            {yearsList ? yearsList[i] : start + i}
          </option>
        ))
    );
    return _;
  };

  const YEARS_LIST = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <section className="inputControls">
      <select name="day" id="day" onChange={handleChange} defaultValue={day}>
        {renderNumberedSlots(31, day, 1)}
      </select>
      <select
        name="month"
        id="month"
        onChange={handleChange}
        defaultValue={month}
      >
        {renderNumberedSlots(12, day, 1, YEARS_LIST)}
      </select>
      <select name="year" id="year" onChange={handleChange} defaultValue={year}>
        {renderNumberedSlots(2, year, 2020)}
      </select>
      <input type="button" value="update" onClick={handleClick} />
    </section>
  );
};

export default DateControl;

import React, { ChangeEvent, useState } from 'react';
import './DateControl.css';
import { DisplayProps } from '../interfaces';

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
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onUpdate({
      day:
        e.target.name === 'day' ? e.target.value : dateState.dateMonthYear.day,
      month:
        e.target.name === 'month'
          ? e.target.value
          : dateState.dateMonthYear.month,
      year:
        e.target.name === 'year'
          ? e.target.value
          : dateState.dateMonthYear.year,
    });
  };

  const handleClick = () => (onClose ? onClose() : null);

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
      <select
        name="day"
        id="day"
        onChange={handleChange}
        defaultValue={dateState.dateMonthYear.day}
      >
        {renderNumberedSlots(31, dateState.dateMonthYear.day, 1)}
      </select>
      <select
        name="month"
        id="month"
        onChange={handleChange}
        defaultValue={dateState.dateMonthYear.month}
      >
        {renderNumberedSlots(12, dateState.dateMonthYear.day, 1, YEARS_LIST)}
      </select>
      <select
        name="year"
        id="year"
        onChange={handleChange}
        defaultValue={dateState.dateMonthYear.year}
      >
        {renderNumberedSlots(2, dateState.dateMonthYear.year, 2020)}
      </select>
      <input type="button" value="update" onClick={handleClick} />
    </section>
  );
};

export default DateControl;

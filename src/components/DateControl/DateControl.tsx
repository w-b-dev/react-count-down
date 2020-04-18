import React, { ChangeEvent } from 'react';
import './DateControl.css';
import { CardProps } from '../interfaces';

const DateControl = ({ cardState, handleClick }: CardProps) => {
  const _handleClick = () => {
    const newState = { ...cardState };
    newState.editMode = false;
    handleClick(newState);
  };
  const _handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newState = { ...cardState };
    const target = e.target;
    const change = target.getAttribute('name');
    switch (change) {
      case 'day':
        newState.day = target.value;
        break;
      case 'month':
        newState.month = target.value;
        break;
      case 'year':
        newState.year = target.value;
        break;
      default:
        break;
    }
    handleClick(newState);
  };

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
    <section className="DateControls" title="countdown input section">
      <form className="inputControls">
        <select
          name="day"
          id="day"
          onChange={_handleChange}
          defaultValue={cardState.day}
        >
          {renderNumberedSlots(31, cardState.day, 1)}
        </select>
        <select
          name="month"
          id="month"
          onChange={_handleChange}
          defaultValue={cardState.month}
        >
          {renderNumberedSlots(12, cardState.day, 1, YEARS_LIST)}
        </select>
        <select
          name="year"
          id="year"
          onChange={_handleChange}
          defaultValue={cardState.year}
        >
          {renderNumberedSlots(2, cardState.year, 2020)}
        </select>
        <input type="button" value="update" onClick={_handleClick} />
      </form>
    </section>
  );
};

export default DateControl;

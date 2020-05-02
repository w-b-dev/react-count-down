import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './DateControl.css';
import { CardProps } from '../interfaces';
import { MONTHS_LIST } from '../../mocks';
import { createDateString } from '../../helper';

const DateControl = ({ cardState, handleClick }: CardProps) => {
  const [title, setTitle] = useState(cardState.title);

  const _handleClick = () => {
    const newState = { ...cardState, title };
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
    newState.dateString = createDateString(newState);
    handleClick(newState);
  };

  const handleKeyPress = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
  };

  const deleteCard = () => {
    const state = { ...cardState, title: 'DELETE' };
    handleClick(state);
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

  return (
    <section className="DateControls" title="countdown input section">
      <form className="inputControlsForm">
        <section className="row">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => handleKeyPress(e)}
          />
        </section>
        <section className="row selectInputs">
          <label htmlFor="day">Date:</label>
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
            {renderNumberedSlots(12, cardState.day, 1, MONTHS_LIST)}
          </select>
          <select
            name="year"
            id="year"
            onChange={_handleChange}
            defaultValue={cardState.year}
          >
            {renderNumberedSlots(2, cardState.year, 2020)}
          </select>
        </section>
      </form>
      <aside className="buttons-column">
        <input type="button" value="Save ✔️" onClick={_handleClick} />
        <input
          className="card-delete"
          type="button"
          value="Delete 🚮"
          onClick={deleteCard}
        />
      </aside>
    </section>
  );
};

export default DateControl;

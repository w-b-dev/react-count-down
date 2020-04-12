import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import './SetDate.css';
import { DisplayProps } from './interfaces';

const SetDate = ({ targetDate, onUpdate }: DisplayProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: SyntheticEvent) => {
    setIsOpen(true);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onUpdate) onUpdate(value);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  // TODO: const formattedDate = date;

  return (
    <footer className="setDate" title="countdown input section">
      {isOpen ? (
        <input
          type="text"
          onChange={handleChange}
          value={targetDate}
          onBlur={handleBlur}
          className="dateInput"
        />
      ) : (
        <input
          type="button"
          onClick={handleClick}
          value={targetDate}
          className="dateAsButton"
        />
      )}
    </footer>
  );
};

export default SetDate;

import React, { useState } from 'react';
import './Header.css';
import { State } from '../interfaces';

const Header = ({ state, updateState }: State) => {
  const [title, setTitle] = useState('');

  const addCountdown = () => {
    console.info('add countdown');
  };

  return (
    <header className="Header">
      <h1 className="main-header">Countdown app</h1>
      <form className="form-header flex">
        <label htmlFor="input-title" className="showDesktop">
          Add a title
        </label>
        <input
          type="text"
          name="input-title"
          value={title}
          placeholder="What's the news?!"
        />
        <input
          className="hideDesktop"
          type="button"
          value="💾"
          aria-label="save entry"
          title="save entry"
          onClick={addCountdown}
        />
      </form>
    </header>
  );
};

export default Header;

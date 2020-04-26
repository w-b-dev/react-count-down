import React, { SyntheticEvent, useState } from 'react';
import './Header.css';
import { State } from '../interfaces';

const Header = ({ state, updateState }: State) => {
  const [title, setTitle] = useState('');

  const addCountdown = () => {
    console.info('add countdown');
  };
  const addNewEntry = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
    //  TODO: create a new entry and update the state
  };
  return (
    <header className="Header">
      <h1 className="main-header">Countdown app</h1>
      <nav className="nav-categories">
        <h2 className="nav-categories-internal-label">Mock filters:</h2>
        <a href="#" className="categories hasNotification">
          birthdays (2)
        </a>
        <a href="#" className="categories hasNotification">
          hygiene routine (8)
        </a>
        <a href="#" className="categories hasNotification">
          exercise plan (1)
        </a>
        <a href="#" className="categories">
          work-related (-)
        </a>
        <a href="#" className="categories">
          side-projects (-)
        </a>
        <a href="#" className="categories hasNotification">
          everything else (23)
        </a>
      </nav>
      <form className="form-header flex">
        <label htmlFor="input-title" className="showDesktop">
          Add a title
        </label>
        <input
          type="text"
          name="input-title"
          value={title}
          placeholder="What's up?"
          onChange={(e) => addNewEntry(e)}
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

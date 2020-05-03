import React, { SyntheticEvent, useState } from 'react';
import './Header.css';
import { CardType, State } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import { MONTHS_LIST } from '../../mocks';

const Header = ({ state, updateState }: State) => {
  const [title, setTitle] = useState('');

  const noOtherEntryOpen = () => {
    const match = state.items.find((e) => e.editMode);
    return !match && title !== '';
  };

  const submitEntry = () => {
    if (noOtherEntryOpen()) {
      const id = uuidv4();
      const entry: CardType = {
        title: title,
        id: id,
        day: new Date().getDate().toString(),
        month: MONTHS_LIST[new Date().getMonth()],
        year: new Date().getFullYear().toString(),
        editMode: true,
        dateString: '',
      };
      const newState = { ...state };
      newState.items.push(entry);
      updateState(newState);
      setTitle('');
    }
  };
  const handleOnChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key.toLowerCase() === 'enter') {
      submitEntry();
    }
  };
  return (
    <header className="Header">
      <h1 className="main-header">Countdown app</h1>
      {/*<nav className="nav-categories">
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
      </nav>*/}
      <form className="form-header flex" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="input-title" className="showDesktop">
          Create a countdown
        </label>
        <input
          type="text"
          name="input-title"
          value={title}
          placeholder="What's the title?"
          onChange={(e) => handleOnChange(e)}
          onKeyPress={(e) => handleOnKeyPress(e)}
        />
        <input
          className="hideDesktop"
          type="button"
          value="💾"
          aria-label="save entry"
          title="save entry"
          onClick={submitEntry}
        />
      </form>
    </header>
  );
};

export default Header;

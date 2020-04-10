import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders an element with title Countdown Display', () => {
  const { getByTitle } = render(<App />);
  const countdownElement = getByTitle(/countdown display/i);
  expect(countdownElement).toBeInTheDocument();
});

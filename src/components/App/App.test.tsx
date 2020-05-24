import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders an element with title Countdown Display', () => {
  const { getByText } = render(<App />);
  const appTitle = getByText(/Countdown app/i);
  expect(appTitle).toBeInTheDocument();
});

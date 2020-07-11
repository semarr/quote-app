import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Create} from './views';

// Test Component
test('renders quote', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/quote app/i);
  expect(linkElement).toBeInTheDocument();
});

// Test Button 
test('renders button correctly', () => {
  const {queryByTestId } = render(<Create />)

  expect(queryByTestId("background")).toBeTruthy()
})

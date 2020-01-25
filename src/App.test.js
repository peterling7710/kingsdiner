import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders address', () => {
  const { getByText } = render(<App />);
  const linkElement = findAllByText(/906 Kingston Road/i);
  expect(linkElement).toBeInTheDocument();
});

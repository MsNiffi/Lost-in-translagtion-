import { render, screen } from '@testing-library/react';
import App from './App';
import LoggInn from './View/LoggIn';

test('renders learn react link', () => {
  render(<LoggInn />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

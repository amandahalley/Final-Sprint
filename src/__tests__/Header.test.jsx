import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header with correct title', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Vitality Essentials/i);
  expect(headerElement).toBeInTheDocument();
});
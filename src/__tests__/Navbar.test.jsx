import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders navbar links', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const supplementLink = screen.getByText(/Supplements/i);
  const clothingLink = screen.getByText(/Clothing/i);
  expect(supplementLink).toBeInTheDocument();
  expect(clothingLink).toBeInTheDocument();
});
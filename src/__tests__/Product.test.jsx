import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Product from '../pages/Supplement/Product'; // Adjust the import path as needed
import { ShoppingContext } from '../context/Shop';

const mockProduct = {
  id: 1,
  productName: "Protein",
  price: 45.99,
  productImage: "image_url", // use a placeholder URL or a mocked image
};

const mockContextValue = {
  cartItems: { 1: 0 }, // Initially, the cart is empty
  addToCart: jest.fn(), // Mock the addToCart function
};

test('renders product information correctly', () => {
  render(
    <ShoppingContext.Provider value={mockContextValue}>
      <Product data={mockProduct} />
    </ShoppingContext.Provider>
  );

  // Check if the product name is rendered
  const productName = screen.getByText(/Protein/i);
  expect(productName).toBeInTheDocument();

  // Check if the product price is rendered
  const productPrice = screen.getByText(/\$45.99/i);
  expect(productPrice).toBeInTheDocument();

  // Check if the "Add To Cart" button is rendered
  const addButton = screen.getByText(/Add To Cart/i);
  expect(addButton).toBeInTheDocument();
});

test('calls addToCart when "Add To Cart" button is clicked', () => {
  render(
    <ShoppingContext.Provider value={mockContextValue}>
      <Product data={mockProduct} />
    </ShoppingContext.Provider>
  );

  // Simulate clicking the "Add To Cart" button
  const addButton = screen.getByText(/Add To Cart/i);
  fireEvent.click(addButton);

  // Expect addToCart to be called with the product's ID
  expect(mockContextValue.addToCart).toHaveBeenCalledWith(mockProduct.id);
});
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DogSounds App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/DogSounds App/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders "Explore Dog Sounds" heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Explore Dog Sounds/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders at least one dog sound card', () => {
  render(<App />);
  // Assuming DogSoundCard renders a button or specific element
  const soundCardElements = screen.getAllByRole('button', { name: /Play/i });
  expect(soundCardElements.length).toBeGreaterThan(0);
});

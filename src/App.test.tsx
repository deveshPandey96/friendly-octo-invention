import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', () => {
  render(<App />);
  const nameElement = screen.getByText(/John Doe/i);
  expect(nameElement).toBeInTheDocument();
  
  const projectsHeading = screen.getByText(/My Projects/i);
  expect(projectsHeading).toBeInTheDocument();
  
  const skillsHeading = screen.getByText(/Skills & Technologies/i);
  expect(skillsHeading).toBeInTheDocument();
});

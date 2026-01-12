import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it('contains main navigation elements', () => {
    render(<App />);
    // Verifica se elementos básicos de navegação estão presentes
    expect(document.querySelector('nav')).toBeInTheDocument();
  });
});
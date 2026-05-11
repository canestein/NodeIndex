// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeIndex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeIndex/i);
    expect(titleElement).toBeInTheDocument();
});

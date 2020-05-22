import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Complete App', () => {
  it('should render home page', () => {
    const { getByTestId } = render(<App />);
    const pageH1 = getByTestId('id-teste');
    // fireEvent.click(linkElement);
    expect(pageH1).toBeInTheDocument();
  });

  it('should change h1', () => {
    const { getByText, getByTestId } = render(<App />);
    const pageH1 = getByTestId('id-teste');
    expect(pageH1).toContainElement(getByText('Home Page'));
    const button = getByTestId('meu-botao');
    fireEvent.click(button);
    expect(pageH1).toContainElement(getByText('Bem Vindo!'));
  });
});

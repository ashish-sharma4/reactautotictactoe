import '@testing-library/jest-dom';
import React from 'react';
import { render as rtlRender, fireEvent, screen } from '@testing-library/react';
import { Home } from '../src/pages';
import { MemoryRouter } from 'react-router';

const BASE_NAME = `/${process.env.REACT_APP_HASH}`;

const render = (ui, { route = '/', ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;
  window.history.pushState({}, 'Test page', BASE_NAME + route);
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('Home Page', () => {
  test('Each Button should have text content /', () => {
    render(<Home />);
    
    const button1 = screen.queryByTestId("button-1");
    expect(button1).toHaveTextContent('/');

    const button2 = screen.queryByTestId("button-2");
    expect(button2).toHaveTextContent('/');

    const button3 = screen.queryByTestId("button-3");
    expect(button3).toHaveTextContent('/');

    const button4 = screen.queryByTestId("button-4");
    expect(button4).toHaveTextContent('/');

    const button5 = screen.queryByTestId("button-5");
    expect(button5).toHaveTextContent('/');

    const button6 = screen.queryByTestId("button-6");
    expect(button6).toHaveTextContent('/');

    const button7 = screen.queryByTestId("button-7");
    expect(button7).toHaveTextContent('/');

    const button8 = screen.queryByTestId("button-8");
    expect(button8).toHaveTextContent('/');

    const button9 = screen.queryByTestId("button-9");
    expect(button9).toHaveTextContent('/');
    
  });

  test('First Turn is Of Cross', () => {
    render(<Home />);
    
    const button1 = screen.queryByTestId("button-1");
    expect(button1).toBeInTheDocument();

    fireEvent.click(button1);
    expect(button1).toHaveTextContent("X");
    
  });

  test('Second Turn is Of Circle', () => {
    render(<Home />);
    
    const button1 = screen.queryByTestId("button-1");
    const button2 = screen.queryByTestId("button-2");

    fireEvent.click(button1);
    expect(button1).toHaveTextContent("X");

    fireEvent.click(button2);
    expect(button2).toHaveTextContent("O");

  });

  test('Button getting disabled onClick', () => {
    render(<Home />);
    
    const button3 = screen.queryByTestId("button-3");

    fireEvent.click(button3);
    expect(button3).toHaveTextContent("X");
    expect(button3).toBeDisabled();
  });

  test('Test Case 1 - For Winner || Horizontal & Start button is present', () => {
    render(<Home />);
    
    const winner = screen.queryByTestId("winner");

    const button1 = screen.queryByTestId("button-1");
    const button2 = screen.queryByTestId("button-2");
    const button3 = screen.queryByTestId("button-3");
    const button4 = screen.queryByTestId("button-4");
    const button5 = screen.queryByTestId("button-5");

    fireEvent.click(button1);
    fireEvent.click(button4);
    fireEvent.click(button2);
    fireEvent.click(button5);
    fireEvent.click(button3);

    expect(winner).toHaveTextContent("Cross Is Winner");

    const start = screen.queryByTestId("start")
    expect(start).toBeInTheDocument()
  });

  test('Test Case 2 - For Winner || Vertical', () => {
    render(<Home />);
    
    const winner = screen.queryByTestId("winner");

    const button1 = screen.queryByTestId("button-1");
    const button2 = screen.queryByTestId("button-2");
    const button3 = screen.queryByTestId("button-3");
    const button4 = screen.queryByTestId("button-4");
    const button7 = screen.queryByTestId("button-7");

    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button4);
    fireEvent.click(button3);
    fireEvent.click(button7);

    expect(winner).toHaveTextContent("Cross Is Winner");

    const start = screen.queryByTestId("start")
    expect(start).toBeInTheDocument()
  });

  test('Test Case 3 - For Winner || Diagonal', () => {
    render(<Home />);
    
    const winner = screen.queryByTestId("winner");

    const button1 = screen.queryByTestId("button-1");
    const button5 = screen.queryByTestId("button-5");
    const button9 = screen.queryByTestId("button-9");
    const button2 = screen.queryByTestId("button-2");
    const button3 = screen.queryByTestId("button-3");

    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button5);
    fireEvent.click(button3);
    fireEvent.click(button9);

    expect(winner).toHaveTextContent("Cross Is Winner");

    const start = screen.queryByTestId("start")
    expect(start).toBeInTheDocument()
  });

  test('Test Case 4 - For Draw', () => {
    render(<Home />);
    
    const winner = screen.queryByTestId("winner");

    const button1 = screen.queryByTestId("button-1");
    const button5 = screen.queryByTestId("button-5");
    const button9 = screen.queryByTestId("button-9");
    const button2 = screen.queryByTestId("button-2");
    const button3 = screen.queryByTestId("button-3");
    const button4 = screen.queryByTestId("button-4");
    const button6 = screen.queryByTestId("button-6");
    const button7 = screen.queryByTestId("button-7");
    const button8 = screen.queryByTestId("button-8");

    fireEvent.click(button1);
    fireEvent.click(button9);
    fireEvent.click(button3);
    fireEvent.click(button2);
    fireEvent.click(button7);
    fireEvent.click(button5);
    fireEvent.click(button8);
    fireEvent.click(button4);
    fireEvent.click(button6);

    expect(winner).toHaveTextContent("Draw");

    const start = screen.queryByTestId("start")
    expect(start).toBeInTheDocument()
  });

  test('onClick the start button the game restarts', () => {
    render(<Home />);
    const winner = screen.queryByTestId("winner");


    const button1 = screen.queryByTestId("button-1");
    const button5 = screen.queryByTestId("button-5");
    const button9 = screen.queryByTestId("button-9");
    const button2 = screen.queryByTestId("button-2");
    const button3 = screen.queryByTestId("button-3");

    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button5);
    fireEvent.click(button3);
    fireEvent.click(button9);

    expect(winner).toHaveTextContent("Cross Is Winner");

    const start = screen.queryByTestId("start")
    expect(start).toBeInTheDocument()

    fireEvent.click(start);
    expect(button1).toHaveTextContent("/");
    expect(button1).not.toBeDisabled();
    expect(button2).toHaveTextContent("/");
    expect(button2).not.toBeDisabled();
    expect(button5).toHaveTextContent("/");
    expect(button5).not.toBeDisabled();
    expect(button3).toHaveTextContent("/");
    expect(button3).not.toBeDisabled();
    expect(button9).toHaveTextContent("/");
    expect(button9).not.toBeDisabled();
  });

});

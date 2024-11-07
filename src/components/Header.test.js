// src/__tests__/Header.test.js
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header"; // Ensure correct relative path

test("displays the toggle button", () => {
  render(<Header />);
  expect(screen.queryByText(/Toggle Mode/)).toBeInTheDocument();
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} />);

  fireEvent.click(screen.queryByText(/Toggle Mode/));
  expect(onDarkModeClick).toHaveBeenCalled();
});

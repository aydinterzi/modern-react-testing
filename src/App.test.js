import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render App component without crashing", () => {
  render(<App />);
  const element = screen.getByText("Modern Testing");
  expect(element).toBeInTheDocument();
});

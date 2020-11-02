import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/BattleStax/i);
  expect(titleElement).toBeInTheDocument();
});

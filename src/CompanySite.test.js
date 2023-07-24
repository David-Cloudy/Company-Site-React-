import { render, screen } from "@testing-library/react";
import CompanySite from "CompanySite";

test("renders learn react link", () => {
  render(<CompanySite />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

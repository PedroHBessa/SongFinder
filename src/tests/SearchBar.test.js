import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("Search bar should be in the screen", () => {
    render(<SearchBar func={() => {}} />);

    expect(
      screen.getByPlaceholderText("Search artists, bands, songs...")
    ).toBeVisible();
  });

  it("Search bar should have empty value", () => {
    render(<SearchBar func={() => {}} />);

    expect(
      screen.getByPlaceholderText("Search artists, bands, songs...")
    ).not.toHaveDisplayValue();
  });
});

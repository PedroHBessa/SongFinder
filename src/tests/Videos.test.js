import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("Search should be in the screen", () => {
    render(<SearchBar func={() => {}} />);

    expect(
      screen.getByPlaceholderText("Search artists, bands, songs...")
    ).toBeVisible();
  });
});

import "@testing-library/jest-dom";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

import Videos from "../components/Videos";
import SearchBar from "../components/SearchBar";
import App from "../App";

describe("Videos", () => {
  it("Videos list should be in the screen after a form submit", () => {
    //render(<Videos data={[]} />);

    render(
      <Videos
        data={[
          {
            snippet: {
              title:
                "Red Hot Chili Peppers - Californication [Official Music Video]",
              description:
                "Watch the official music video for Californication by Red Hot Chili Peppers from the album Californication. Subscribe to the ...",
              thumbnails: {
                high: {
                  url: "https://i.ytimg.com/vi/YlUKcNNmywk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
            },
          },
        ]}
      />
    );

    expect(screen.getByTitle("video")).toBeInTheDocument();
  });
});

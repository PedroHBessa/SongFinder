import React from "react";
import SearchBar from "./components/SearchBar";
import Videos from "./components/Videos";
import "./scss/media.scss";
import Ghost from "./components/ghostLayer";

import youtube from "./apis/youtube";

import "./App.css";

class App extends React.Component {
  state = { videos: [] };

  //get list of videos from youtube api
  onTermSubmit = async (term) => {
    const response = await youtube.videoList.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };

  render() {
    return (
      <div className="container">
        <Ghost />

        <SearchBar onFormSubmit={this.onTermSubmit} />
        <Videos data={this.state.videos} />
      </div>
    );
  }
}

export default App;

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
    console.log("loading...");

    const response = await youtube.videoList.get("/search", {
      params: {
        q: term,
      },
    });
    //kill the loading animation when videos are displayed
    if (response.status === 200) {
      document.querySelector(".lds-ring").style.display = "none";
      document.querySelector(".videos__main").style.display = "flex";
    }

    this.setState({ videos: response.data.items });
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

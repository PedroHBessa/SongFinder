import React from "react";
import Player from "./Player";

import youtube from "../apis/youtube";

import "../scss/videos.scss";

//create a screen which all videos will be displayed
class Videos extends React.Component {
  state = { video: undefined, response: undefined };

  //get the id of an unique video and send to youtube api to get statistics of this video
  onClickVideo = async (id) => {
    console.log(id);
    const response = await youtube.videoStat.get("/videos", {
      params: {
        id: id,
      },
    });

    //get the statistics response and send to state of this component
    this.setState({ response: response });
    console.log(response);
  };

  //get data of an unique video from lists of videos to send to player screen and do some styles to fit the player screen
  getId = (event) => {
    console.log(event);
    document.body.style.overflow = "auto";
    document.querySelector(".ghost").style.opacity = "1";
    document.querySelector(".ghost").style.zIndex = "50";

    //document.querySelector(".player-main").style.display = "flex";
    document.querySelector(".player-main").style.opacity = "1";
    document.querySelector(".player-main").style.zIndex = "1000";

    this.setState({
      video: this.props.data[event.currentTarget.id],
    });
  };

  render() {
    //create a snippet and render a list of videos in videos screen
    const liSnippet = this.props.data.map((arr, index) => (
      <li
        id={index}
        onClick={(e) => {
          this.getId(e);
          this.onClickVideo(arr.id.videoId);
        }}
      >
        <div className="hover">
          <p>WATCH NOW</p>
        </div>
        <img
          src={arr.snippet.thumbnails.high.url}
          width="100%"
          height="215"
          alt=""
          srcSet=""
        />

        <div className="list__content">
          <h1>{arr.snippet.title}</h1>
          <p>{arr.snippet.description}</p>
        </div>
      </li>
    ));

    return (
      <section className="videos__main">
        <ul className="videos__list">{liSnippet}</ul>
        <Player data={this.state} />
      </section>
    );
  }
}

export default Videos;

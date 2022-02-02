import React from "react";
import "../scss/player.scss";

//create a Player screen where the video can be watched.
class Player extends React.Component {
  //close window of the player screen and go back to video list.
  closeWindow = () => {
    document.body.style.overflow = "auto";
    document.querySelector(".ghost").style.opacity = "0";
    document.querySelector(".ghost").style.zIndex = "-10000";
    //document.querySelector(".player-main").style.display = "none";
    document.querySelector(".player-main").style.opacity = "0";
    document.querySelector(".player-main").style.zIndex = "-1000";
  };

  render() {
    let playerData;

    //prevent data load errors, since some data still doesn't exist when application starts.
    if (this.props.data.video === undefined) {
      playerData = "";
    } else {
      //create a snippet with data returned from youtube api
      playerData = (
        <div className="player-flex">
          <div className="player">
            <iframe
              src={`https://www.youtube.com/embed/${this.props.data.video.id.videoId}`}
              width="100%"
              title="Iframe Example"
            ></iframe>
            <div className="player__description">
              <h1>{this.props.data.video.snippet.title}</h1>
              <p>{this.props.data.video.snippet.description}</p>

              <h3>
                {this.props.data.response === undefined
                  ? ""
                  : "views: " +
                    this.props.data.response.data.items[0].statistics.viewCount}
              </h3>
              <h3>
                {this.props.data.response === undefined
                  ? ""
                  : "likes: " +
                    this.props.data.response.data.items[0].statistics.likeCount}
              </h3>
            </div>
          </div>
          <div onClick={this.closeWindow} className="close-btn">
            X
          </div>
        </div>
      );
    }
    return <section className="player-main">{playerData}</section>;
  }
}

export default Player;

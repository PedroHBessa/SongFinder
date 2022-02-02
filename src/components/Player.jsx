import React from "react";
import "../scss/player.scss";

//create a Player screen where the video can be watched.
class Player extends React.Component {
  state = { stopSound: false };

  //close window of the player screen and go back to video list.
  closeWindow = () => {
    document.body.style.overflow = "auto";
    document.querySelector(".ghost").style.opacity = "0";
    document.querySelector(".ghost").style.zIndex = "-10000";
    //document.querySelector(".player-main").style.display = "none";
    document.querySelector(".player-main").style.opacity = "0";
    document.querySelector(".player-main").style.zIndex = "-1000";

    document.querySelector(".iframe").setAttribute("src", "");
  };

  nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }

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
              className="iframe"
              src={`https://www.youtube.com/embed/${this.props.data.video.id.videoId}`}
              width="100%"
              title="Iframe Example"
              allowFullScreen
            ></iframe>
            <div className="player__description">
              <h1>{this.props.data.video.snippet.title}</h1>
              <p>{this.props.data.video.snippet.description}</p>

              <h3>
                <i className="fa fa-eye"></i>
                {this.props.data.response === undefined
                  ? ""
                  : this.nFormatter(
                      parseInt(
                        this.props.data.response.data.items[0].statistics
                          .viewCount
                      ),
                      1
                    )}
              </h3>
              <h3>
                <i className="fa fa-heart"></i>
                {this.props.data.response === undefined
                  ? ""
                  : this.nFormatter(
                      parseInt(
                        this.props.data.response.data.items[0].statistics
                          .likeCount
                      ),
                      1
                    )}
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

import React from "react";
import "../scss/ghost.scss";

//create a layer to block user to change something in the video list sreen when the player are open.
class GhostLayer extends React.Component {
  render() {
    return <div className="ghost"></div>;
  }
}

export default GhostLayer;

//Create an Object "req" with 2 keys

import axios from "axios";

const KEY = "AIzaSyDLP403W4rgPbd6XMpC6o1HaBflAqYZJ8w";

const req = {
  //get list of videos from youtube api
  videoList: axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 50,
      key: KEY,
    },
  }),
  //get video statistics from youtube api
  videoStat: axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "statistics",

      key: KEY,
    },
  }),
};

export default req;

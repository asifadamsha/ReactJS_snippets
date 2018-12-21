import Axios from "axios";
import Secret from "../secret";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: Secret.YOUTUBE_API_KEY
  }
});

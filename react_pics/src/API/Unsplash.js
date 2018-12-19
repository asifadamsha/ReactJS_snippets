import Axios from "axios";
import Secret from "../secret";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID " + Secret.UNSPLASHED_API_KEY
  }
});

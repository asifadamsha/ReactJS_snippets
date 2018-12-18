import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c478e59666a320c53723d0efb69a0da2bdf5bbc4c0e3fa44144a04ab0dc90ea7"
  }
});

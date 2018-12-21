import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../API/Youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { youtubeVideos: [] };

  onTermSubmit = async searchTerm => {
    console.log("Search term : " + searchTerm);

    const response = await Youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });
    console.log(response.data.items);
    this.setState({ youtubeVideos: response.data.items });
  };

  onVideoSelected() {}

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmitCallback={this.onTermSubmit} />
        <VideoList videos={this.state.youtubeVideos} />
      </div>
    );
  }
}

export default App;

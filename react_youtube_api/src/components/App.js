import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../API/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { youtubeVideos: [], selectedVideo: null };

  onTermSubmit = async searchTerm => {
    console.log("Search term : " + searchTerm);

    const response = await Youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });
    console.log(response.data.items);
    this.setState({
      youtubeVideos: response.data.items,
      selectedVideo: response.data.items[0] // default video to show
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmitCallback={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.youtubeVideos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // default video search
    this.onTermSubmit("reactjs");
  }
}

export default App;

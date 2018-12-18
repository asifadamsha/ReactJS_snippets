import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../API/Unsplash";

class App extends React.Component {
  state = { searchResults: [] };

  onSearchSubmit = async searchTerm => {
    const response = await Unsplash.get("search/photos", {
      params: {
        query: searchTerm
      }
    });

    this.setState({ searchResults: response.data.results });

    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        Found : {this.state.searchResults.length} images
      </div>
    );
  }
}

export default App;

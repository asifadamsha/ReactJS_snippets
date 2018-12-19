import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../API/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { searchResults: [] };

  onSearchSubmit = async searchTerm => {
    const response = await Unsplash.get("search/photos", {
      params: {
        query: searchTerm,
        per_page: 100
      }
    });

    this.setState({ searchResults: response.data.results });
    console.log(this.state.searchResults);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.searchResults} />
      </div>
    );
  }
}

export default App;

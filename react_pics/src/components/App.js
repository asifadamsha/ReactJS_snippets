import React from "react";
import Axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(searchTerm) {
    console.log(searchTerm);
    Axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization:
          "Client-ID c478e59666a320c53723d0efb69a0da2bdf5bbc4c0e3fa44144a04ab0dc90ea7"
      },
      params: {
        query: searchTerm
      }
    })
      .then(response => {
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

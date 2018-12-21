import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "South parks" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmitCallback(this.state.searchTerm);
  };

  onInputValueChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search youtube videos</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputValueChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

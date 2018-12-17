import React from "react";

class SearchBar extends React.Component {
  state = { searchWord: "Ford mustang" };

  onInputChange(event) {
    console.log(event.target.value);
  }

  onFormSubmit = event => {
    event.preventDefault(); // avoid page reloading
    //console.log(this.state.searchWord);
    this.props.onUserSubmit(this.state.searchWord);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search image</label>
            <input
              type="text"
              value={this.state.searchWord}
              onChange={event => {
                console.log(event.target.value);
                this.setState({ searchWord: event.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // state initialisation
  state = { latitude: null, longitude: null, errorMessage: "" };

  componentWillMount() {
    console.log("Component rendered");

    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  renderContent() {
    if (this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    } else {
      return <Spinner text="Please click allow to use you position" />;
    }
  }

  render() {
    console.log("Component rendering ...");
    return <div className="main-ui">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // state initialisation
    this.state = { latitude: null, longitude: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => console.log(error)
    );
  }

  render() {
    return (
      <div>
        Latitude : {this.state.latitude}
        <br />
        Longitude : {this.state.longitude}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

import "./SeasonDisplay.css"; //should manually import css files
import React from "react";

const seasonConfig = {
  summer: { text: "Go to beach", icon: "sun" },
  winter: { text: "It's chilly", icon: "snowflake" }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude);
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

const getSeason = latitude => {
  const month = new Date().getMonth();

  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

export default SeasonDisplay;

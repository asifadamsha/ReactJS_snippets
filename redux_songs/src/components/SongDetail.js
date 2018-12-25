import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Click play to get song details</div>;
  }

  return (
    <div>
      <h3>Song details :</h3>
      <p>
        Title : {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("SongDetail : ");
  console.log(state);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

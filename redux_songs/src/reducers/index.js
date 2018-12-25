import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Chennai express - Titli",
      duration: "4:05"
    },
    {
      title: "Singam 3 - He is my hero",
      duration: "5:30"
    },
    {
      title: "Party - Thean puthu thean",
      duration: "6:00"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

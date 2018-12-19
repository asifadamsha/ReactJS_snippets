import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

const ImageList = props => {
  const images = props.images.map(actualImage => {
    return <ImageCard key={actualImage.id} image={actualImage} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;

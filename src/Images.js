import React from "react";
const photos = require("./photos");

const Images = () => {
  const images = photosJSON => {
    photosJSON["data"].map(photo => {
      return <img src={photo.images.low_resolution.url} />;
    });
  };
  let imageArray = images(photos);

  return (
    <div>
      {imageArray}
    </div>
  );
};

export default Images;

import React from "react";
import Images from "./Images";
const photos = require("./photos");

const Gallery = () => {
  return (
    <div>
      <h2>Gallery</h2>
      <Images images={photos.data} />
    </div>
  );
};

export default Gallery;

import React from "react";

const Images = props => {
  const { images } = props;

  const imageArray = images.map(photo => {
    return (
      <div className="col-sm-3">
        <img src={photo.images.low_resolution.url} />
      </div>
    );
  });

  return <div>{imageArray}</div>;
};

export default Images;

import React from "react";

const Images = props => {
  const {images} = props;
  console.log(images);
  const imageArray = images.map(photo => {
    return (
      <div className="col-sm-3 col-md-4">
        <div className="thumbnail">
          <a href={photo.link}>
            <img alt="OK THEN" src={photo.images.low_resolution.url} />
          </a>
          <div className="caption">
            <p># Comments {photo.comments.count}</p>
            <p># Likes {photo.likes.count}</p>
            <a
              href={
                "https://www.instagram.com/" + photo.user.username + "?hl=en"
              }
            >
              <p>User: {photo.user.username} </p>
            </a>
            <p>Filter Used: {photo.filter}</p>
            <p>Tags: {photo.tags}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div>{imageArray}</div>;
};

export default Images;

// prop = slice values

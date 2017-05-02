import React, {Component} from "react";
const photos = require("./photos");
import Images from "./Images";
import Button from "./Button";

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      allPhotos: photos.data,
      filteredPhotos: photos.data
    };
    this._onClickHandler = this._onClickHandler.bind(this);
  }

  _onClickHandler() {
    this.setState({
      filter: "Juno"
    });
  }

  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <Button handler={this._onClickHandler} />
        <Images images={this.state.filteredPhotos} />
      </div>
    );
  }
}

export default Gallery;

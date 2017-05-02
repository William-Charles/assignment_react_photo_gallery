import React from "react";
const photos = require("./photos");
import Images from "./Images";
import Button from "./Button";

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      allPhotos: photos.data,
      filteredPhotos: photos.data,
      filter: "all"
    };
    this._onClickHandler = this._onClickHandler.bind(this);
  }

  _onClickHandler(e) {
    this.setState({
      filter: e.target.value,
      filteredPhotos: this.filterPhotos(e.target.value)
    });
  }

  filterPhotos(filterParam) {
    let results;
    if (filterParam === "all") {
      results = this.state.allPhotos;
    } else {
      results = this.state["allPhotos"].filter(photo => {
        return filterParam === photo.filter;
      });
    }
    return results;
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

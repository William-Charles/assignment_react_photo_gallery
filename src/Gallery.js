import React from "react";
const photos = require("./photos");
import Images from "./Images";
import Button from "./Button";
import Select from "./Select";

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      allPhotos: photos.data,
      filteredPhotos: photos.data,
      filter: "all",
      order: 1,
      page: {
        currentPage: 1,
        maxPage: 2
        //maxpagesetter needed
      }
    };

    this.filters = ["All", "Lark", "Reyes", "Normal", "Inkwell"];
    this._onClickHandler = this._onClickHandler.bind(this);
    this.previousPageHandler = this.previousPageHandler.bind(this);
    this.nextPageHandler = this.nextPageHandler.bind(this);
    this.sortClickHandler = this.sortClickHandler.bind(this);
  }

  _onClickHandler(e) {
    this.setState({
      filter: e.target.value,
      filteredPhotos: this.filterPhotos(e.target.value)
    });
  }

  sortClickHandler() {
    this.setState({
      order: this.state.order * -1,
      filteredPhotos: this.sortByUsers()
    });
  }

  sortByUsers() {
    let array;
    if (this.state.order > 0) {
      array = this.state.allPhotos.sort(function(a, b) {
        return a.created_time - b.created_time;
      });
    } else {
      array = this.state.allPhotos.sort(function(a, b) {
        return b.created_time - a.created_time;
      });
    }
    return array;
  }

  filterPhotos(filterParam) {
    let results;
    if (filterParam === "All") {
      results = this.state.allPhotos;
    } else {
      results = this.state["allPhotos"].filter(photo => {
        return filterParam === photo.filter;
      });
    }
    return results;
  }

  filteredPhotosLength() {
    return this.state["filteredPhotos"].length;
  }

  paginatedPhotos() {
    const start = (this.state.page.currentPage - 1) * 12;
    let stop = start + 12;
    if (this.state.page.currentPage === this.state.page.maxPage) {
      stop = this.filteredPhotosLength();
    }
    return this.state.filteredPhotos.slice(start, stop);
  }

  previousPageHandler() {
    if (this.state.page.currentPage > 1) {
      this.setState({
        page: {
          ...this.state.page,
          currentPage: this.state.page.currentPage - 1
        }
      });
    }
    return;
  }

  nextPageHandler() {
    console.log("clicked next", this.state);
    if (this.state.page.currentPage < this.state.page.maxPage) {
      this.setState({
        page: {
          ...this.state.page,
          currentPage: this.state.page.currentPage + 1
        }
      });
    }
    return;
  }

  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <h4>Filter Results: {this.filteredPhotosLength()}</h4>
        <Button handler={this.sortClickHandler} text={"Sort By Time"} />
        <Select options={this.filters} handler={this._onClickHandler} />
        <Button handler={this.previousPageHandler} text={"Previous"} />
        <Button handler={this.nextPageHandler} text={"Next"} />
        <Images images={this.paginatedPhotos()} />
      </div>
    );
  }
}

export default Gallery;

// deduce possible page numbers by length of filtered array
// set to state
// send slice values to images based on state
// store page as current page and last page

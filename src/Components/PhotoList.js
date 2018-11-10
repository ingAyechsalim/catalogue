import { connect } from "react-redux";
import React, { Component } from "react";
import PhotoCard from "./PhotoCard";

import axios from "axios";

const PhotoListContainer = {
  background: `url("/images/background2.jpg")`,
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundAttachement: "fixed"
};

const PhotoToDisplay = {
  display: "flex", //The flex-wrap property specifies whether the flexible items should wrap or not.
  flexWrap: "wrap"
};

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl1: "https://jsonplaceholder.typicode.com/albums/".concat(
        this.props.id,
        "/photos"
      ) //Get data from new url of the spécifique album
    };
    console.log(this.state.apiUrl1);
  }
  componentDidMount() {
    axios
      .get(this.state.apiUrl1)
      .then(res => this.props.initPhotoList(res.data));
  }
  render() {
    return (
      <div style={PhotoListContainer}>
        <h1 style={{ color: "white", paddingLeft: "30px" }}> PhotoList</h1>
        <div style={PhotoToDisplay}>
          {this.props.PhotosList.map(photos => (
            <PhotoCard key={photos.id} photos={photos} />
          ))}
        </div>{" "}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    PhotosList: state.Album
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initPhotoList: album => {
      dispatch({
        type: "FETCHONEALBUM",
        album
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);

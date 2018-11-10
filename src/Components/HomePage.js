import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import axios from "axios";
import { connect } from "react-redux";
import Hoc from "./Hoc";

//styling
const HomePageContainer = {
  background: `url("/images/background1.jpg")`,
  height: "100%",
  backgroundRepeat: "no-repeat",
  position: "relative"
};

const AlbumListToDisplay = {
  display: "flex", //The flex-wrap property specifies whether the flexible items should wrap or not.
  flexWrap: "wrap",
  paddingTop: "50px"
};
const apiUrl = "https://jsonplaceholder.typicode.com/albums";
class HomePage extends Component {
  state = { isLoading: true };

  componentDidMount() {
    axios.get(apiUrl).then(res => {
      this.props.initAlbumList(res.data);
      this.setState({
        isLoading: false
      });
    });
  }
  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Hoc message={isLoading} />;
    } else {
      return (
        <div>
          <div style={HomePageContainer} />
          <div />
          <div style={AlbumListToDisplay}>
            {this.props.AlbumsList.map(album => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    AlbumsList: state.Albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initAlbumList: albums => {
      dispatch({
        type: "FETCHALBUMS",
        albums
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

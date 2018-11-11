import { connect } from "react-redux";
import React, { Component } from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";
import Hoc from "./Hoc";

const PhotoListContainer = {
  background: `url("/images/background2.jpg")`,
  height: "100%",
  backgroundAttachement: "fixed"
};

const PhotoToDisplay = {
  display: "flex", //The flex-wrap property specifies whether the flexible items should wrap or not.
  flexWrap: "wrap"
};
/*
*description:
*First we recupered the id of album from the nested route, after that we reform the new apiurl of specifique album,
 *and we fetch all
*photos from this url using componentDidmount lifecycle, after that we dispatch those photos to our redux store finally we display those photo in our
*component using map that's it 
*we have use of corse our HOC spinner to make beautiful view adding setTimeout function :p

*/
class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      apiUrl1: "https://jsonplaceholder.typicode.com/albums/".concat(
        this.props.id,
        "/photos"
      ) //Get data from new url of the spécifique album id recupered from route
    };
    console.log(this.state.apiUrl1);
  }
  componentDidMount() {
    axios.get(this.state.apiUrl1).then(res => {
      this.props.initPhotoList(res.data);
      setTimeout(() => {
        this.setState({
          isLoading: false
        });
      }, 1000);
    });
  }
  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Hoc message={"your photolist"} />;
    } else {
      return (
        <div style={PhotoListContainer}>
          <h1 style={{ color: "white", paddingLeft: "30px" }}> PhotoList</h1>
          <div style={PhotoToDisplay}>
            {this.props.PhotosList.map(photos => (
              <PhotoCard key={photos.id} photos={photos} />
            ))}
          </div>
          {""}
        </div>
      );
    }
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

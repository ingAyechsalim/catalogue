import { connect } from "react-redux";
import React, { Component } from 'react'
import PhotoCard from  './PhotoCard'

import axios from 'axios'

const PhotoToDisplay= {
  display: 'flex',      //The flex-wrap property specifies whether the flexible items should wrap or not.
  flexWrap: 'wrap', 
}
class PhotoList extends Component {
  constructor(props) {
  super(props)
  this.state={
       apiUrl1:"https://jsonplaceholder.typicode.com/Photos/".concat(this.props.id,"/photos")//Get data from new url of the spécifique album
  }
 }
componentDidMount() {
  axios.get(this.state.apiUrl1).then(res => this.props.initPhotoList(res.data)

  );
}
  render() {
    return (
      <div>
  <div style={PhotoToDisplay}>
      {this.props.PhotosList.map(photos=><PhotoCard  key={photos.id} photos={photos}></PhotoCard>
      )}
        </div>      </div>

    )
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

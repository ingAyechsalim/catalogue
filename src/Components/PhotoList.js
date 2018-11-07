import React, { Component } from 'react'
import PhotoCard from  './PhotoCard'

import axios from 'axios'

const PhotoToDisplay= {
  display: 'flex',      //The flex-wrap property specifies whether the flexible items should wrap or not.
  flexWrap: 'wrap', 
}
export class PhotoList extends Component {
  constructor(props) {
  super(props)
  this.state={
    album:[],
    Id:this.props.id,
    apiUrl1:"https://jsonplaceholder.typicode.com/albums/".concat(this.props.id,"/photos")//Get data from new url of the spécifique album
  }
 }
componentDidMount() {
  axios.get(this.state.apiUrl1).then(res => {this.setState({album: res.data});
  console.log(this.state.album);

  })}
  
    
  render() {
    return (
      <div>
  <div style={PhotoToDisplay}>
      {this.state.album.map(photos=><PhotoCard  key={photos.id} photos={photos}></PhotoCard>
      )}
        </div>      </div>

    )
  }
}

export default PhotoList

import React, { Component } from 'react'
import axios from 'axios'

export class PhotoList extends Component {
  constructor(props) {
  super(props)
  this.state={
    album:[],
    Id:this.props.id,
    apiUrl1:"https://jsonplaceholder.typicode.com/albums/".concat(this.props.id,"/photos")
  }
  console.log(this.state.apiUrl1);
  
}
componentDidMount() {
  axios.get(this.state.apiUrl1).then(res => {this.setState({album: res.data});
  })}
  
    
  render() {
    return (
      <div>
      {this.state.album.map(photo=><p  key={photo.id}>{photo.title}</p>)}
      </div>

    )
  }
}

export default PhotoList

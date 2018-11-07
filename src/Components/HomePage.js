import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AlbumCard from  './AlbumCard'
import axios from 'axios'

//styling
const AlbumListToDisplay= {
  display: 'flex',      //The flex-wrap property specifies whether the flexible items should wrap or not.
  flexWrap: 'wrap', 
}
const apiUrl='https://jsonplaceholder.typicode.com/albums'
class HomePage extends Component {
  state={albums:[]}
  componentDidMount() {
    axios.get(apiUrl).then(res => {this.setState({albums: res.data});  })}
  render() {
    return (
      <div>
       <ul >
        <li>
          <Link  to="/">HomePage</Link>
        </li>
        <li>
          <Link  to="/WishList">WishList</Link>
        </li>
        </ul>
        <div style={AlbumListToDisplay}>
      {this.state.albums.map(album=><AlbumCard  key={album.id} album={album}></AlbumCard>
      )}
        </div>
      </div>
    );
  }
}

export default HomePage;

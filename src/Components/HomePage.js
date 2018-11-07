import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AlbumCard from  './AlbumCard'
import axios from 'axios'

//styling
const HomePageContainer={
  backgroundColor: "#5fadad",
  backgroundSize: "cover !important"

}
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
      <div style={HomePageContainer} >
       <ul >
        <li>
          <NavLink activeStyle ={{color:'green',
          textDecoration: 'none'}} to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink  to="/WishList"activeStyle ={{color:'green',
        textDecoration: 'none'}}>WishList</NavLink>
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

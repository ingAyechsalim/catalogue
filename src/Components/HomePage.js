import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AlbumCard from  './AlbumCard'
import axios from 'axios'
import { connect } from "react-redux";

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
  componentDidMount() {
    axios.get(apiUrl).then(res => this.props.initAlbumList(res.data))}
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
      {this.props.AlbumsList.map(album=><AlbumCard  key={album.id} album={album}></AlbumCard>
      )}
        </div>
      </div>
    );
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
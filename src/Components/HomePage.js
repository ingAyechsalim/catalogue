import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AlbumCard from  './AlbumCard'
import axios from 'axios'
import { connect } from "react-redux";

//styling
const HomePageContainer={
  backgroundColor:'white',
}
const Nav= {
    paddingtop: '0.5em',
    paddingBottom: '0.5em',
    border: '1px solid #a2a2a2',
    backgroundColor: '#f4f4f4',
    BoxShadow: '0px 0px 14px 0px rgba(0,0,0,0.75)',
    borderRadius: '5px'
  
}
const NavBar={
  display: 'flex',
  margin: '0px',
  textAlign: 'center',
  padding: '0.5em 1em',
  listStyleType: 'none',

}
const SigleImage={
  float:'left',
  width:'80px',
hight:'50px',
marginTop:'-20px',
overflow:'hidden',
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
      <div style={Nav} >
      <NavLink to="/"><img style={SigleImage}  src={require("./sigle.png")} /></NavLink>   

       <ul style={NavBar} >
        <li>
          <NavLink style={{  textDecoration: 'none',  padding: '0.5em 1em',

}} activeStyle ={{color:'green',
           }} to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink style={{  textDecoration: 'none',padding: '0.5em 1em'
}}  to="/WishList"activeStyle ={{color:'green',
        }}>FAVORIS</NavLink>
        </li>
        </ul>
        </div>

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
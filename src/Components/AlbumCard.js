import React from 'react'
import {Link} from 'react-router-dom'

const albumItemContainer = {
  margin: '20px',
  width: '410px',
  border: '5px solid pink',
  borderRadius: '12px 0px',
  backgroundColor: 'rgba(0, 140, 255, .5)',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: "0 5px 3px 0 #ebebeb",
};

const albumTitle = {
  fontSize: '16px',
  textAlign: 'center',
  fontFamily: "sans-serif",
  textDecoration: 'none',
  color:'white'


};
const imageAlbum={
  borderRadius: '12px 0px',

};
const FavorisImage={
  padding: "2%",

width:'50px',
hight:'50px'

}
const AlbumCard = (props) => {
  const {album = {}} = props
    const {
         id,
      title= "",
    } =album
  return (
    <div style={albumItemContainer} >
      <div >
    
     
            <img style={imageAlbum} src="https://secure.photobox.com/assets/content_graphics/67/160467.jpg?1506089102" alt="card"/>

          </div>
          <div >
            
           <Link style={albumTitle} to={`/albums/${id}`}><p ><img style={FavorisImage}  src={require("./images/next.png")} alt='next'/>{title}</p></Link> 
          </div >
    </div>
  )
}

export default AlbumCard

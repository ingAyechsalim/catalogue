import React from 'react'
import {Link} from 'react-router-dom'
//styling my page
const PhotoItemContainer = {
  margin: '20px',
  width: '410px',
  border: '5px solid pink',
  borderRadius: '12px 0px',
  backgroundColor:'#18dcff',
  display: 'flex',
  flexDirection: 'column'

};

const PhotoTitle = {
  fontSize: '16px',
  textAlign: 'center',
  fontFamily: "sans-serif",
  textDecoration: 'none'


};
const ImageCard={
  borderRadius: '12px 0px',

};
const FavorisButton={
  border: 'none' ,
  margin: '4px 2px',
    cursor: 'pointer',

  backgroundColor: 'Transparent',
  width:'50px',

 

}
const FavorisImage={
  padding: "2%",

width:'50px',
hight:'50px'

}
//our component

const PhotoCard = (props) => {
  const {photos = {}} = props
    const {
      albumId ,
      id,
      title= "",
      url= "",
      thumbnailUrl=""
    } = photos
  return (
    <div style={PhotoItemContainer} >
      <div >
    
     
            <img style={ImageCard} src= {thumbnailUrl} alt="description of Photos"/>

          </div>
          <div >
           <Link style={PhotoTitle} to={`/photos/${id}`}><p >{title}</p></Link> 
           <button style={FavorisButton}> <img style={FavorisImage}  src={require("./heart.png")} /></button>
          </div >
    </div>
  )
}

export default PhotoCard

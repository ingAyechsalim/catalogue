import { connect } from "react-redux";
import React from 'react'
import {Link} from 'react-router-dom'
//styling my page
const PhotoItemContainer = {
  margin: '20px',
  width: '410px',
  border: '5px solid pink',
  borderRadius: '12px 0px',
  backgroundColor: 'rgba(0, 140, 255, .5)',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: "0 5px 3px 0 #ebebeb"

};

const PhotoTitle = {
  fontSize: '16px',
  textAlign: 'center',
  fontFamily: "sans-serif",
  textDecoration: 'none',
  color:'white',


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
  const {photos = {},      onAddWish = () => {},
} = props
    const {
      id,
      title= "",
      thumbnailUrl=""
    } = photos
    console.log(photos)
  return (
    <div style={PhotoItemContainer} >
      <div >
    
     
            <img style={ImageCard} src= {thumbnailUrl} alt="description of Photos"/>

          </div>
          <div >
           <Link style={PhotoTitle} to={`/photos/${id}`}><p > <img style={FavorisImage}  src={require("./images/next.png")}/>{title}</p></Link> 
           <button style={FavorisButton} onClick={()=>{onAddWish(photos)}}> <img style={FavorisImage}  src={require("./images/heart.png")} alt='Favoris icon' /></button>
          </div >
    </div>
  )
}
const mapStateToProps = state => {
 
}
const mapDispatchToProps = dispatch => {
  return {
    onAddWish: (photos) => {
      dispatch({
          type: 'ADDWISH',
           newWish:photos
        });
  }       }};

const PhotoCardContainer =
    connect(mapStateToProps, mapDispatchToProps)(PhotoCard)


export default PhotoCardContainer
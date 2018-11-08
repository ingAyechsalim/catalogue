import { connect } from "react-redux";

import React from 'react'

//styling my page
const PhotoItemContainer = {
  margin: '20px',
  width: '600px',
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

const PhotoToDisplay = (props) => {
     const {
     id=0,
     photos = {}

    } = props
    const {
      albumId=0 ,
      title= "",
      url= "",
      thumbnailUrl=""
    } = photos[id]
console.log(props.photos[id])
      return (
    <div style={PhotoItemContainer} >
      <div >  
            <img style={ImageCard} src= {url} alt="description of Photos"/>

          </div>
          <div >
            
           <p style={PhotoTitle} >{title}</p>
          </div >
          <button style={FavorisButton}> <img style={FavorisImage}  src={require("./heart.png")} /></button>

    </div>
  )
}
const mapStateToProps = state => {
  return {
    photos: state.Album
  }

}
const mapDispatchToProps = dispatch => {
  return {
       }
  
};

const PhotoToDisplayContainer =
    connect(mapStateToProps, mapDispatchToProps)(PhotoToDisplay)


export default PhotoToDisplayContainer

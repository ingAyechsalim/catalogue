import React from 'react'
//styling my page
const PhotoItemContainer = {
  margin: '20px',
  width: '410px',
  border: '5px solid pink',
  borderRadius: '12px 0px',
  backgroundColor:'#18dcff',
  display: 'flex',
  flexDirection: 'column',

  boxShadow: "0 5px 3px 0 #ebebeb"

};

const ImageCard={
  borderRadius: '12px 0px',

};
const PhotoTitle = {
  fontSize: '16px',
  textAlign: 'center',
  fontFamily: "sans-serif",
  textDecoration: 'none'


};
//our component

const WishCard = (props) => {
  const {photo = {}} = props
    const {
            title= "",
      thumbnailUrl=""
    } = photo
  return (
    <div style={PhotoItemContainer} >
      <div >
    
            <img style={ImageCard} src= {thumbnailUrl} alt="description of Photos"/>
          <p style={PhotoTitle}>{title}</p> 

          </div>
          
    </div>
  )
}

export default WishCard

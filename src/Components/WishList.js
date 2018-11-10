import { connect } from "react-redux";
import React from 'react'
import {Link} from 'react-router-dom'

import WishCard from  './WishCard'

const PhotoToDisplayContainer={
  background: `url("http://127.0.0.1:8887/src/Components/images/background3.jpg")` ,
  height:'100%',
  backgroundRepeat:'no-repeat' ,
  backgroundAttachement:'fixed',
  backgroundSize:'cover'
    }

const PhotoToDisplay= {
  paddingTop:'60px',
  display: 'flex',      //The flex-wrap property specifies whether the flexible items should wrap or not.
  flexWrap: 'wrap', 
}
const FavorisImage={
  padding: "2%",
   width:'200px',
hight:'200px'
}


const WishList = (props) => {
       const {photos = {}} = props   //
               console.log(photos)
                            if(photos.length===0)   
                           return(
                           <div style={{paddingTop:'100px',marginLeft:'40%'}}>
                             <Link to='/'> 
                             <img style={FavorisImage}  src={require("./images/panier.png")} alt='panier'/>
                            </Link> 
                            </div>
                            )
                            else
    return (
                <div style={PhotoToDisplayContainer}> 
                  <div style={PhotoToDisplay}>
      {photos.map(photo=><WishCard  key={photo.id} photo={photo}></WishCard>
      )}
                          </div>     
                           </div>

    )
  }

const mapStateToProps = state => {
  return {
    photos: state.WishList
  };
};

const mapDispatchToProps = dispatch => {
  return {
     };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishList);

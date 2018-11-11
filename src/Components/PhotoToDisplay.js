import { connect } from "react-redux";
import React from "react";
//styling my page
const PhotoContainer = {
  backgroundImage: `url("/images/background2.jpg")`,
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundAttachement: "fixed"
};

const PhotoItemContainer = {
  width: "600px",
  border: "5px solid pink",
  borderRadius: "12px 0px",
  backgroundColor: "rgba(0, 140, 255, .5)",
  display: "flex",
  flexDirection: "column",
  marginTop: "5%",
  marginLeft: "20%"
};

const PhotoTitle = {
  fontSize: "16px",
  textAlign: "center",
  fontFamily: "sans-serif",
  textDecoration: "none"
};

const ImageCard = {
  borderRadius: "12px 0px"
};
const FavorisButton = {
  border: "none",
  margin: "4px 2px",
  cursor: "pointer",
  backgroundColor: "Transparent",
  width: "50px"
};
const FavorisImage = {
  padding: "2%",
  width: "50px",
  hight: "50px"
};

//our component
/*
 *description:
 *in this stateless component we take all photos from redux store using mapStatetoprops from  and we desplay only the photo
 *with specifique Id taked from the nested route
 **onclik lIKE ICON we dispatch an to redux reducer wishlist to ad it to wishlit
 */
const notificate = () => {
  prompt("GREAT YOUR PHOTO IS ADDED");
};
const PhotoToDisplay = props => {
  const { id = 0, photos = {}, onAddWish = () => {} } = props;
  const { title = "", url = "" } = photos[id]; //destruturing of props we make a default values to dont return undifined to our view
  console.log(props.id); // we have Id that we take it from the route and the photo that we take it from store
  return (
    <div style={PhotoContainer}>
      <h1 style={{ color: "white", marginLeft: "30px" }}> YOUR PHOTO </h1>
      <div style={PhotoItemContainer}>
        <div>
          <img style={ImageCard} src={url} alt="" />
        </div>
        <div>
          <p style={PhotoTitle}>{title}</p>
        </div>
        <button
          onClick={() => {
            onAddWish(photos[id]);
            notificate();
          }}
          style={FavorisButton}
        >
          <img style={FavorisImage} src="./images/heart.png" alt="icon" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    photos: state.Album
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddWish: photos => {
      dispatch({
        type: "ADDWISH",
        newWish: photos
      });
    }
  };
};

const PhotoToDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoToDisplay);

export default PhotoToDisplayContainer;

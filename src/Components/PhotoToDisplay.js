import { connect } from "react-redux";
import React from "react";
//styling my page
const PhotoContainer = {
  backgroundImage: `url("/images/background2.jpg")`,
  height: "1000px",
  backgroundRepeat: "no-repeat",
  backgroundAttachement: "fixed"
};

const PhotoItemContainer = {
  border: "5px solid pink",
  borderRadius: "12px 0px",
  backgroundColor: "rgba(0, 140, 255, .5)",
  display: "flex",
  flexDirection: "column",
  marginTop: "5%",
  marginLeft: "20%",
  width: "40%"
};

const PhotoTitle = {
  fontSize: "16px",
  textAlign: "center",
  fontFamily: "sans-serif",
  textDecoration: "none"
};

const ImageCard = {
  borderRadius: "12px 0px",
  width: "50%"
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
function notificate() {
  return alert("GREAT YOUR PHOTO IS ADDED TO YOUR WISHLIST");
}
const PhotoToDisplay = props => {
  const { id = 0, photos = [], onAddWish = () => {} } = props;
  //const { title = "", url = "" } = photos; //destruturing of props we make a default values to dont return undifined to our view
  console.log([...photos][id]); // tableau d'objet images

  // we have Id that we take it from the route and the photo that we take it from store
  return (
    <div style={PhotoContainer}>
      <h1 style={{ color: "white", marginLeft: "30px" }}> YOUR PHOTO </h1>
      <div style={PhotoItemContainer}>
        <div>
          <img style={ImageCard} src={[...photos][id].url} alt="" />
        </div>
        <div>
          <p style={PhotoTitle}>{[...photos][id].title}</p>
        </div>
        <button
          onClick={() => {
            onAddWish([...photos][id]);
            notificate();
            console.log([...photos][id]);
          }}
          style={FavorisButton}
        >
          <img style={FavorisImage} src="/images/heart.png" alt="icon" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    photos: state.Album.filter(el => el.id)
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

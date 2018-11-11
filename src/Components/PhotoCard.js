import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
//styling my page
const PhotoItemContainer = {
  margin: "20px",
  width: "410px",
  border: "5px solid pink",
  borderRadius: "12px 0px",
  backgroundColor: "rgba(0, 140, 255, .5)",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 5px 3px 0 #ebebeb"
};

const PhotoTitle = {
  fontSize: "16px",
  textAlign: "center",
  fontFamily: "sans-serif",
  color: "white",
  backgroundColor: "transparent"
};
const ImageCard = {
  borderRadius: "12px 0px"
};
const FavorisButton = {
  border: "none",
  padding: "4px 2px",
  cursor: "pointer",
  width: "0px"
};
const FavorisImage = {
  padding: "2%",
  width: "70px",
  hight: "70px"
};
//our dumb component
/* wW use this stateless component to display all list of photos in the specifique album {PhotoList} used by Photolist
 *We have a link that we take us to the specifique  photo to display we passe the id us route props
 *Of corse the onclick button dispatch an action to wishList Reducer you are free if you want to add it in this stage
 */
function notificate() {
  return alert("GREAT YOUR PHOTO IS ADDED TO YOUR WISHLIST");
}

const PhotoCard = props => {
  const { photos = {}, onAddWish = () => {} } = props;
  const { id = 0, title = "", thumbnailUrl = "" } = photos;
  //console.log(photos);
  return (
    <div style={PhotoItemContainer}>
      <div>
        <button
          style={FavorisButton}
          onClick={() => {
            onAddWish(photos);
            notificate();
          }}
        >
          <img
            style={FavorisImage}
            src="/images/heart.png"
            alt="Favoris icon"
          />
        </button>
      </div>
      <Link style={{ textDecoration: "none" }} to={`/photos/${id}`}>
        <div>
          <img
            style={ImageCard}
            src={thumbnailUrl}
            alt="description of Photos"
          />
        </div>
        <div>
          <p style={PhotoTitle}> {title}</p>
        </div>
      </Link>
    </div>
  );
};
const mapStateToProps = () => {
  return {};
}; //we dont need any state from redux we have only dipatch the action to Add photo in store to our wichlist
const mapDispatchToProps = dispatch => {
  return {
    onAddWish: photos => {
      dispatch({
        type: "ADDWISH",
        newWish: { ...photos }
      });
    }
  };
};

export default connect(mapDispatchToProps)(PhotoCard);

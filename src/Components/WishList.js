import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import WishCard from "./WishCard";

const PhotoToDisplayContainer = {
  background: `url("/images/background3.jpg")`,
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundAttachement: "fixed",
  backgroundSize: "cover"
};

const PhotoToDisplay = {
  paddingTop: "60px",
  display: "flex", //The flex-wrap property specifies whether the flexible items should wrap or not.
  flexWrap: "wrap"
};
const FavorisImage = {
  padding: "2%",
  width: "200px",
  hight: "200px"
};

/*
description:
in this stateless component we take all photos added to wishlit usin mapStatetoprops from redux store and we desplay them
 one by one using map(wishcard component)
if our panier is empty we show a simple photo that linked to the home page
*/
const WishList = props => {
  const { photos = {} } = props; //destruturing of props we make a default values to dont return undifined to our view
  console.log(photos);
  if (photos.length === 0)
    return (
      <div>
        <div style={{ paddingTop: "100px", paddingLeft: "40%" }}>
          <Link to="/">
            <img style={FavorisImage} src="./images/panier.png" alt="panier" />
          </Link>
        </div>
      </div>
    );
  else
    return (
      <div style={PhotoToDisplayContainer}>
        <div style={PhotoToDisplay}>
          {photos.map(photo => (
            <WishCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
};

const mapStateToProps = state => {
  return {
    photos: state.WishList
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishList);

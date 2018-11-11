import React from "react";
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

const ImageCard = {
  borderRadius: "12px 0px"
};
const PhotoTitle = {
  fontSize: "16px",
  textAlign: "center",
  fontFamily: "sans-serif",
  color: "white",
  textDecoration: "none"
};
//our component
/**Description:
 * Unit Statles component used by Wishlist component to desplay all the wished Photos.
 *
 *
 *
 */

const WishCard = props => {
  const { photo = {} } = props;
  const {
    title = "", //initialisation of our props to not return undifined and destruct them
    thumbnailUrl = ""
  } = photo;
  return (
    <div style={PhotoItemContainer}>
      <div>
        <img style={ImageCard} src={thumbnailUrl} alt="description of Photos" />
        <p style={PhotoTitle}>{title}</p>
      </div>
    </div>
  );
};

export default WishCard;

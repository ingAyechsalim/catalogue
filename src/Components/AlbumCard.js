import React from "react";
import { Link } from "react-router-dom";

const albumItemContainer = {
  margin: "20px",
  width: "410px",
  border: "5px solid pink",
  borderRadius: "12px 0px",
  backgroundColor: "rgba(0, 140, 255, .5)",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 5px 3px 0 #ebebeb"
};

const albumTitle = {
  fontSize: "16px",
  textAlign: "center",
  fontFamily: "sans-serif",
  color: "white"
};
const imageAlbum = {
  borderRadius: "12px 0px"
};
/**Desription:
 * AlbumCard is the unit component used by HomePage to desplayy all album list. We used a link with Id to PhotoList Component
 *  that we will use this Id to filter th ApiUrl for fetching data  from api
 */
const AlbumCard = props => {
  const { album = {} } = props;
  const { id, title = "" } = album;
  return (
    <div style={albumItemContainer}>
      <Link style={{ textDecoration: "none" }} to={`/albums/${id}`}>
        <div>
          <img style={imageAlbum} src="/images/minialbum.jpg" alt="card" />
        </div>
        <div style={albumTitle}>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default AlbumCard;

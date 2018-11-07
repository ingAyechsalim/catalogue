const AlbumsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHALBUMS":
      return (state = action.albums);
    case "FETCHONEALBUM":
      return state=(action.album);
    case "FETCHIMAGE":
    return state=(action.image);
    default:
      return state;
  }
};
export default AlbumsReducer;
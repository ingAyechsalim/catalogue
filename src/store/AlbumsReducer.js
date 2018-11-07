const AlbumsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHALBUMS":
      return (state = action.albums);
        default:
      return state;
  }
};
export default AlbumsReducer;
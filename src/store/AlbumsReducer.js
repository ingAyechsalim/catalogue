/**
 * one action type FETCH ALBUMS THAT RETURN ALL ALBUMS STATE
 * ALBUMS PASSED WITH ACTION DISPATCHED TYPE
 *
 */
const AlbumsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHALBUMS":
      return (state = action.albums);
    default:
      return state;
  }
};
export default AlbumsReducer;

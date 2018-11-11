/**
 * Album Reducer
 * Is responsable to return state from all specifiques action types. Action with payload:
 *  addtion information that we use it to manipulate with state
 * Initialisation of state is important to not return undifined msg
 * defaut case is of corse very !!imporant
 * FETCHALBUM RETURN LIST OF IMAGE OF SPECIFIQUE  ALBUM
 *
 *
 *
 */
const AlbumReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHONEALBUM":
      return (state = action.album);
    default:
      return state;
  }
};
export default AlbumReducer;

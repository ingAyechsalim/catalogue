const AlbumReducer = (state = [], action) => {
    switch (action.type) {
            case "FETCHONEALBUM":
        return state=(action.album);
      case "FETCHIMAGE":
      return state=(action.image);
      default:
        return state;
    }
  };
  export default AlbumReducer;
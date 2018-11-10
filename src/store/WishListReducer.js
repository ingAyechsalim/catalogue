const WishListReducer = (state = [], action) => {
    switch (action.type) {
          case "ADDWISH":
        return state.concat(action.newWish);
            default:
        return state;
    }
  };
  export default WishListReducer;
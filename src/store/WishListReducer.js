const WishListReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCHWICHLIST":
        return (state = action.wishList);
      case "ADDWISH":
        return state.concat(action.newWish);
      case "FETCHIMAGE":
      return state.concat(action.newWish)
      default:
        return state;
    }
  };
  export default WishListReducer;
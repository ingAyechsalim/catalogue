const WishListReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCHWICHLIST":
        return (state = action.wishList);
      case "ADDWISH":
        return state=(action.wish);
      case "FETCHIMAGE":
      return state.concat(action.neWish)
      default:
        return state;
    }
  };
  export default WishListReducer;
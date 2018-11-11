/**
 * one type off action is used ADDWISH evry action disptached concat the previous state with
 * new state we must use pure function concat
 *
 *
 *
 */
const WishListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDWISH":
      return state.concat(action.newWish);
    default:
      return state;
  }
};
export default WishListReducer;

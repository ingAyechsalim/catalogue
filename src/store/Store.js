/**
 * AFter creating all our reducers we must create our store
 * !! we must use pure function to Reducers so we should use immutable methodes
 * Or Redux store use one single reducer
 * so we combine them to using combineReducers function from redux
 * we use redux devtools in chrome witch very important to debug our aplication
 */
import { createStore, combineReducers } from "redux";
import AlbumsReducer from "./AlbumsReducer";
import WishListReducer from "./WishListReducer";
import AlbumReducer from "./AlbumReducer";
const store = createStore(
  combineReducers({
    WishList: WishListReducer,
    Albums: AlbumsReducer,
    Album: AlbumReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

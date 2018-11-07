import {createStore, combineReducers} from 'redux'
import AlbumsReducer from './AlbumsReducer'
import WishListReducer from './WishListReducer'
const store = createStore(combineReducers({
    WishList: WishListReducer,
    Albums: AlbumsReducer,
}))
export default store

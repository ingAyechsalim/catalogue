import {createStore, combineReducers} from 'redux'
import AlbumsReducer from './AlbumsReducer'
import WishListReducer from './WishListReducer'
import AlbumReducer from './AlbumReducer'
const store = createStore(combineReducers({
    WishList: WishListReducer,
    Albums: AlbumsReducer,
    Album:AlbumReducer

})
,    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store

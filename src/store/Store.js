import {createStore, combineReducers} from 'redux'
import AlbumsReducer from './AlbumsReducer'
import WishListReducer from './WishListReducer'

const store = createStore(combineReducers({
    WishList: WishListReducer,
    Albums: AlbumsReducer,

})
,    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store

import React from 'react'
import HomePage from './Components/HomePage'
import PhotoList from './Components/PhotoList'
import WishList from './Components/WishList'
import PhotoToDisplay from './Components/PhotoToDisplay'
import { Switch, Route } from 'react-router-dom'
//*A <Route> expects a path prop, which is a string that describes the pathname that the route matches 
// for example, <Route path='/album'/> should match a pathname that begins with /album.
// When the current location’s pathname is matched by the path, the route will render a React element.
 //When the path does not match, the route will not render anything /*/
const Routes = () => {
  return (
          <Switch>

         <Route  exact 
          path="/"
           render={() => <HomePage />} />
         <Route
          exact
          path="/albums/:id"
          render={(props) => <PhotoList id={props.match.params.id}/> }
        />
        <Route
          exact
          path="/albums/:id/photo"
          render={(props) => <PhotoToDisplay id={props.match.params.id}/> }
        />
          <Route
          exact
          path="/WishList"
          render={() => <WishList/> }
        />

            </Switch>
  )
}
export default Routes

/**Simple App catalogue application that use Api url from
 * https://jsonplaceholder.typicode.com/
 * To get different albums and photo of album to diplay them
 * when you like spécifique photo from specifique album you add it to wishlist
 * finally we display wishlist
 * Technologies used:
 * Creat-React-app
 * React-router
 * container/stateless component
 *redux
 *
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import CatalogueStore from "./store/Store";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

ReactDOM.render(
  <Provider store={CatalogueStore}>
    <Router>
      <div>
        <Navbar />
        <Footer />
        <Routes />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

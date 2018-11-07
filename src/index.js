import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes'
import { Provider } from "react-redux";
import CatalogueStore from './store/Store'

ReactDOM.render(<Provider store={CatalogueStore}><Router><Routes /></Router></Provider>, document.getElementById('root'));



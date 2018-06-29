import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppActions from '../actions/app-actions';
import AppContainer from './app-container';
import Catalog from './catalog/app-catalog';
import CatalogItemDetails from './catalog/app-catalog-item-details';

const RESOURCE = 'https://s3-eu-west-1.amazonaws.com/styl-reading-list/data.json';

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch(RESOURCE)
      .then(response => response.json())
      .then(data => {
        AppActions.retrieveCatalog(data.books);
      });
  }

  render() {
    return (
      <AppContainer>
        <Router>
          <div>
            <Route exact path="/" component={ Catalog }/>
            <Route path="/item/:itemId" component={ CatalogItemDetails }/>
          </div>
        </Router>
      </AppContainer>
    );
  }
}

export default App;

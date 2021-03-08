import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import React from 'react';
import { HomePage } from '../HomePage';
import { DetailsPage } from '../DetailsPage/DetailsPage';

export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:id" exact>
            <DetailsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

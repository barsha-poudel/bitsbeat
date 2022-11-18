/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';

import { Login } from './containers/Login/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Users } from './containers/Signup/Loadable';
import history from '../utils/history';
import { UserDashboard } from './containers/UserDashboard';
import ProtectedRoute from './containers/Login/ProtectedRoute';
import AuthencationRoute from './containers/Login/AuthencationRoute';

import 'react-datepicker/dist/react-datepicker.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - BASE" defaultTitle="BASE">
        <meta name="description" content="BASE" />
      </Helmet>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Users} />
          <ProtectedRoute
            exact
            path="/userdashboard"
            component={UserDashboard}
          />

          {/* <AuthencationRoute exact path="/" component={Login} /> */}

          {/* <Route exact path="/userdashboard" component={UserDashboard} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Router, BrowserRouter } from 'react-router-dom';
import history from 'utils/history';

import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';

/* CREATE WALLET */

export default function UserRoutes(props) {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - BASE" defaultTitle="BASE">
        <meta name="description" content="BASE" />
      </Helmet>
      {/* {window.location.pathname === userRoute && <Redirect to={userRoute} />} */}
      <Router history={history}>
        <Switch>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

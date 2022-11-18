import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { useSelector, useDispatch } from 'react-redux';
import { sliceKey, reducer } from './slice';
import { userinfoSaga } from './saga';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import Header from './components/Header';
import { userActions } from './slice';
import { CVgenerator } from './containers/CVgenerator/Loadable';

export function UserDashboard(props: any) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userinfoSaga });

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="User" />
      </Helmet>
      <Header />
      <CVgenerator />

      {/* <Cvselector />
      <Workexperience />
      <Education /> */}
    </div>
  );
}

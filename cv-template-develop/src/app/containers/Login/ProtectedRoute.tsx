import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { sliceKey, reducer, loginActions } from './slice';
import { selectUserTokenSuccess } from './selectors';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';
const ProtectedRoute = ({ component: Component, ...restProps }) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });
  const userTokenSuccess = useSelector(selectUserTokenSuccess);

  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState<any>(null);
  const Protected = localStorage.getItem('token');
  useEffect(() => {
    dispatch(loginActions.tokenRequest({}));
    return () => {
      dispatch(loginActions.cleanMessage());
    };
  }, []);

  if (userTokenSuccess) {
    return <Route {...restProps} component={Component} />;
  }
  return <p>loading</p>;
};
export default ProtectedRoute;

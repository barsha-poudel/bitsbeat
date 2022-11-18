import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';
import { sliceKey, reducer, loginActions } from './slice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles/login.css';
import LoginForm from './LoginForm';

import { Helmet } from 'react-helmet-async';
import history from 'utils/history';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';
import { getCurrentScope } from 'immer/dist/internal';
import {
  selectLoginFailed,
  selectLoginSuccessMessage,
  selectLoginErrorMessage,
  selectLoading,
  selectLoginSuccess,
} from './selectors';
import { type } from 'os';
import { BASE_URL } from 'Constants/uris';

interface Props {
  match: any;
}

type ErrorType = {
  email?: string;
  password?: string;
};
const initialState = {
  email: '',
  password: '',
};

export function Login() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState<any>(initialState);
  const [errors, setErrors] = useState<ErrorType>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const error = useSelector(selectLoginErrorMessage);
  const successMessage = useSelector(selectLoginSuccessMessage);
  const loginSuccess = useSelector(selectLoginSuccess);
  const isLoading = useSelector(selectLoading);

  const onSubmitForm = async (evt?: React.FormEvent<HTMLFormElement>) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
      let newError: ErrorType = {};
      if (!loginData.email) newError.email = 'Email is required';
      if (
        loginData.email &&
        !/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(loginData.email)
      )
        newError.email = 'You must insert the valid email';
      if (!loginData.password) newError.password = 'Password is required';
      setErrors(newError);
      // if (!(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/).test(loginData.email)){
      //   errors.email = "You must insert the valid email"
      //   evt.currentTarget.classList.toggle('if-error');
      //   console.log(evt.currentTarget);
      // } else {
      if (!newError.email && !newError.password) {
        dispatch(
          loginActions.loginRequest({
            ...loginData,
          }),
          // remove if-error class from evt.currentTarget
        );
      }
      // }
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.persist();
    setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
    setErrors({ ...errors, [evt.currentTarget.name]: '' });
  };

  useEffect(() => {
    console.log(error);
    if (error) {
    }
  }, [error]);
  useEffect(() => {
    if (loginSuccess) {
      console.log('here');
      setLoginData(initialState);
      history.push('/userdashboard');
    }
  }, [loginSuccess]);
  useEffect(() => {
    return () => {
      dispatch(loginActions.cleanMessage());
    };
  }, []);

  // if(loginSuccess)
  //     }
  //   }, [loginSuccess]);
  return (
    <>
      <Helmet>
        <title>Join Us</title>
      </Helmet>
      <div className="login__wrapper">
        <Container>
          <div className="login-logo"></div>
          <LoginForm
            loginData={loginData}
            isLoading={isLoading}
            onSubmitForm={onSubmitForm}
            handleChange={handleChange}
            showPassword={showPassword}
            handlePasswordVisibility={handlePasswordVisibility}
            errors={errors}
          />
        </Container>
      </div>
    </>
  );
}

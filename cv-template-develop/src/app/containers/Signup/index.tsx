import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, usersActions } from './slice';
import { usersSaga } from './saga';
import { Link } from 'react-router-dom';
import history from 'utils/history';
import {
  selectErrorResponse,
  selectLoading,
  selectUserMessage,
} from './selectors';
import { Col, Container, Row } from 'react-bootstrap';

import { Helmet } from 'react-helmet-async';
import RegisterForm from './RegisterForm';

interface Props {
  match: any;
}

type Error = {
  fullname?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
  address?: string;
  phone?: string;
};
const initialState = {
  fullname: '',
  email: '',
  password: '',
  confirmpassword: '',
  address: '',
  phone: '',
};

export function Users(props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: usersSaga });

  const dispatch = useDispatch();

  const [userData, setUserData] = useState<any>(initialState);
  const [errors, setErrors] = useState<Error>({});
  const error = useSelector(selectErrorResponse);
  const successMessage = useSelector(selectUserMessage);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(
    false,
  );
  const isLoading = useSelector(selectLoading);

  const onSubmitForm = async (evt?: React.FormEvent<HTMLFormElement>) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
      let validation: Error = {};
      const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
      if (!userData.fullname) {
        validation.fullname = 'Fullname is required';
      }
      if (!userData.email) {
        validation.email = 'email is required';
      }
      if (userData.email && !regex.test(userData.email)) {
        validation.email = 'email should be valid';
      }
      if (!userData.password) {
        validation.password = 'password is required';
        validation.confirmpassword = 'password is required';
      } else if (
        !userData.confirmpassword ||
        userData.password !== userData.confirmpassword
      ) {
        validation.confirmpassword = 'password did not match';
      }

      if (!userData.address) {
        validation.address = 'Address is required';
      }
      if (!userData.phone) {
        validation.phone = 'Phone Number is required';
      }
      setErrors(validation);
      if (
        !validation.email &&
        !validation.password &&
        !validation.fullname &&
        !validation.confirmpassword &&
        !validation.address &&
        !validation.phone
      ) {
        let { confirmpassword, ...signupPayload } = userData;
        dispatch(
          usersActions.saveUserRequest({
            ...signupPayload,
          }),
        );
      }
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.persist();
    setUserData({ ...userData, [evt.target.name]: evt.target.value });
    setErrors({ ...errors, [evt.currentTarget.name]: '' });
  };
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    if (error) {
    }
  }, [error]);
  useEffect(() => {
    if (successMessage) {
      setUserData(initialState);
    }
  }, [successMessage]);

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="login__wrapper">
        <RegisterForm
          userData={userData}
          isLoading={isLoading}
          onSubmitForm={onSubmitForm}
          handleChange={handleChange}
          errors={errors}
          handlePasswordVisibility={handlePasswordVisibility}
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
          handleConfirmPasswordVisibility={handleConfirmPasswordVisibility}
        />
      </div>
    </>
  );
}

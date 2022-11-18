import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { loginSaga } from './saga';
import { initialState } from './slice';


// First select the relevant part from the state
const selectDomain = (state: RootState) => state?.login || initialState;

export const selectLogin = createSelector(
  [selectDomain],
  loginState => loginState,
);
export const selectLoading = createSelector(
  [selectDomain],
  loginState => loginState.loading,
);
export const selectLoginRequest = createSelector(
  [selectDomain],
  loginState => loginState.loginRequest,
);
export const selectLoginSuccess = createSelector(
  [selectDomain],
  loginState => loginState.loginSuccess,
);
export const selectLoginFailed = createSelector(
  [selectDomain],
  loginState => loginState.loginFailed,
);
export const selectLoginData = createSelector(
  [selectDomain],
  loginState => loginState.loginData,
);
export const selectLoginSuccessMessage = createSelector(
  [selectDomain],
  loginState => loginState.successMessage,
);
export const selectLoginErrorMessage = createSelector(
  [selectDomain],
  loginState => loginState.errorMessage,
);
export const selectUserTokenSuccess = createSelector(
  [selectDomain],
  loginState => loginState.tokenSuccessMessage ,
);
export const selectUserTokenFailed = createSelector(
  [selectDomain],
  loginState => loginState.tokenFailedMessage,
);



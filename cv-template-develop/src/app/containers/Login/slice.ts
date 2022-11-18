/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Login Slice
 *
 * Here we define:
 * - The shape of our container's slice of Redux store,
 * - All the actions which can be triggered for this slice, including their effects on the store.
 *
 * Note that, while we are using dot notation in our reducer, we are not actually mutating the state
 * manually. Under the hood, we use immer to apply these updates to a new copy of the state.
 * Please see https://immerjs.github.io/immer/docs/introduction for more information.
 *
 */

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { LoginState } from './types';
import history from 'utils/history';
// The initial state of the Blogs container
export const initialState: LoginState = {
  loading: false,
  loginSuccess: false,
  loginFailed: false,
  loginRequest: undefined,
  loginData: undefined,
  saveLoginData: undefined,
  successMessage: undefined,
  errorMessage: undefined,
  userTokenFailed: undefined,
  userTokenSuccess: undefined,
  tokenFailedMessage: undefined,
  tokenSuccessMessage: undefined,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    cleanMessage(state) {
      state.successMessage = undefined;
      state.loginSuccess = false;
      state.tokenSuccessMessage = undefined;
    },
    loginRequest(state, action: PayloadAction<any>) {
      state.loading = true;
      state.loginData = action.payload;
      state.loginSuccess = false;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.successMessage = response.message;
      state.loading = false;
      state.loginSuccess = true;
      localStorage.setItem('token', response.data.token);
    },
    loginFailed(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.errorMessage = response.message;
      state.loading = false;
      state.loginFailed = true;
    },
    tokenRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    userTokenSuccess(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.tokenSuccessMessage = response.message;
      state.loading = false;
    },
    userTokenFailed(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.tokenFailedMessage = response.message;
      state.loading = false;
    },
  },
});
export const { actions: loginActions, reducer, name: sliceKey } = loginSlice;

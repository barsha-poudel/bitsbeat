import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { DashboardState } from './types';
import history from 'utils/history';

// The initial state of the Blogs container
export const initialState: DashboardState = {
  loading: false,
  userInsertSuccess: false,
  userInsertFailed: false,
  userInsertData: undefined,
};

const userInfoSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    userDataInsertRequest(state, action: PayloadAction<any>) {
      state.loading = true;
      state.userInsertFailed = false;
    },
    userInsertSuccess(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    userInsertFailed(state, action: PayloadAction<any>) {
      state.loading = false;
    },
  },
});

export const { actions: userActions, reducer, name: sliceKey } = userInfoSlice;

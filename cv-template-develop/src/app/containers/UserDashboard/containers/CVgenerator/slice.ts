import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the CVgenerator container
export const initialState: ContainerState = {
  loading: false,
  userInsertSuccess: false,
  userInsertFailed: false,
  userData: null,
  userSuccess: undefined,
  userError: undefined,
  userRequest: null,
  isSubmitted: false,
};

const cVgeneratorSlice = createSlice({
  name: 'cVgenerator',
  initialState,

  reducers: {
    userDataRequest(state, action: PayloadAction<any>) {
      state.loading = true;
      state.userInsertFailed = false;
      state.isSubmitted = false;
      state.userRequest = action.payload;
    },
    userSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      const response = action.payload;
      state.isSubmitted = true;
      state.userSuccess = response.message;
      state.isSubmitted = true;
    },
    userFailed(state, action: PayloadAction<any>) {
      state.loading = false;
      const response = action.payload;
      state.userError = response.message;
    },
  },
});

export const {
  actions: cVgeneratorActions,
  reducer,
  name: sliceKey,
} = cVgeneratorSlice;

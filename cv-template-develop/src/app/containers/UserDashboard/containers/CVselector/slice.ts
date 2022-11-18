import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the CVselector container
export const initialState: ContainerState = {
  loading: false,
  success: false,
  error: undefined,
  data: undefined,
  requestData: undefined,
};

const cVselectorSlice = createSlice({
  name: 'cVselector',
  initialState,
  reducers: {
    cvSelectRequest(state, action: PayloadAction<any>) {
      state.loading = false;
      const response = action.payload;
      state.requestData = response;
    },
    cvSelectSuccess(state) {
      state.loading = true;
      state.success = true;
    },
    cvSelectFailed(state, action: PayloadAction<any>) {
      state.loading = false;
      const response = action.payload;
      state.error = response.message;
    },
    cvGetRequest(state) {
      state.loading = false;
    },
    cvGetSuccess(state, action: PayloadAction<any>) {
      state.loading = true;
      const response = action.payload;
      state.data = response;
    },
    cvGetFailed(state, action: PayloadAction<any>) {
      state.loading = false;
      const response = action.payload;
      state.error = response.message;
    },
  },
});

export const {
  actions: cVselectorActions,
  reducer,
  name: sliceKey,
} = cVselectorSlice;

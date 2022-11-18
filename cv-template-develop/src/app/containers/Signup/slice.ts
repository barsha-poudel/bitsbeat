import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { UsersState } from './types';
// The initial state of the Users container
export const initialState: UsersState = {
  allUsersData: {
    dataList: [],
    pagination: {},
    currentPage: 1,
    totalItems: 0,
  },
  loading: false,
  error: null,
  errorResponse: '',
  singleUserData: {},
  userMessage: null,
  deletedId: '',
  stateList: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    cleanMessage(state) {
      state.userMessage = null;
      state.deletedId = '';
      state.error = null;
      state.errorResponse = '';
    },
    loadAllUsersData(state, action: PayloadAction<any>) {
      state.loading = true;
      state.error = null;
      state.allUsersData = null;
      // state.userMessage ='';
    },
    allUsersDataLoaded(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.allUsersData = {
        dataList: response.dataList,
        totalItems: response.pagination,
        currentPage: response.pagination.currentpage || 1,
      };
      state.loading = false;
    },
    allUsersDataError(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.error = response.message;
      state.loading = false;
      state.allUsersData = initialState.allUsersData;
    },
    deleteUserRequest(state, action: PayloadAction<any>) {
      state.error = null;
      state.userMessage = '';
    },
    deleteUserSuccess(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.userMessage = response.message;
      state.deletedId =
      response.deletedadmin.userid || action.payload.deletedAdmin.userId;
      state.loading = false;
      state.error = null;
      // const userId = action.payload.deletedAdmin.userId;
      // const allUsersData= useSelector(selectAllUsersData);
    },
    deleteUserFailure(state, action: PayloadAction<any>) {
      const response = action?.payload?.data?.data;
      state.error = action.payload.message;
      state.userMessage = response || action.payload.message;
      state.usersRegisterData = action.payload;
    },

    saveUserRequest(state, action: PayloadAction<any>) {
      state.loading = true;
      state.errorResponse = null;
      state.usersRegisterData = action.payload;
    },
    saveUserSuccess(state, action: PayloadAction<any>) {
      const response = action.payload;
      // state.allUsersData = response || action.payload.adminList;
      state.userMessage = response.msg;
      state.loading = false;
      localStorage.removeItem('onBoarding');
    },
    saveUserFailure(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.loading = false;
      state.errorResponse = response && response.msg;
      state.userMessage = '';
      state.usersRegisterData = action.payload;
    },
    getUserByIdRequest(state, action: PayloadAction<any>) {
      state.loading = true;
      state.errorResponse = null;
      state.userId = action.payload;
    },
    getUserByIdSuccess(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.singleUserData = response.dataList;
      state.loading = false;
    },
    getUserByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.errorResponse = null;
      state.singleUserData = action.payload;
    },
    updateUserRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.usersRegisterData = action.payload;
      state.userMessage = '';
    },
    getStateListRequest(state) {
      state.loading = true;
      state.errorResponse = null;
    },
    getStateListSuccess(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.stateList = response.dataList;
      state.loading = false;
    },
    getStateListFailure(state, action: PayloadAction<any>) {
      const response = action.payload;
      state.loading = false;
      state.errorResponse = response && response.message;
      state.stateList = [];
    },
  },
});

export const { actions: usersActions, reducer, name: sliceKey } = usersSlice;

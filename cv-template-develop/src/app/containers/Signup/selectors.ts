import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.users || initialState;

export const selectUsers = createSelector(
  [selectDomain],
  usersState => usersState,
);

export const selectLoading = createSelector(
  [selectDomain],
  usersState => usersState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  usersState => usersState.error,
);

export const selectAllUsersData = createSelector(
  [selectDomain],
  usersState => usersState.allUsersData,
);

export const selectUserRegisterData = createSelector(
  [selectDomain],
  usersState => usersState.usersRegisterData,
);

export const selectUserId = createSelector(
  [selectDomain],
  usersState => usersState.userId,
);

export const singleUserData = createSelector(
  [selectDomain],
  usersState => usersState.singleUserData,
);
export const selectUserMessage = createSelector(
  [selectDomain],
  usersState => usersState.userMessage,
);
export const selectDeletedId = createSelector(
  [selectDomain],
  usersState => usersState.deletedId,
);

export const selectErrorResponse = createSelector(
  [selectDomain],
  usersState => usersState.errorResponse,
);

export const selectStateListResponse = createSelector(
  [selectDomain],
  usersState => usersState.stateList,
);

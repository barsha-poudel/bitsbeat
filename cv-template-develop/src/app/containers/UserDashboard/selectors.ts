import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.global || initialState;

export const selectGlobal = createSelector(
  [selectDomain],
  globalState => globalState,
);
export const selectLoading = createSelector(
  [selectDomain],
  globalState => globalState.loading,
);
export const selectUserInsertSuccess = createSelector(
  [selectDomain],
  globalstate => globalstate.userInsertData,
);
export const selectUserInsertFailed = createSelector(
  [selectDomain],
  globalState => globalState.userInsertFailed,
);
export const selectUserInsertData = createSelector(
  [selectDomain],
  globalState => globalState.userInsertData,
);

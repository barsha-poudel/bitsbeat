import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.cVgenerator || initialState;

export const selectCVgenerator = createSelector(
  [selectDomain],
  cVgeneratorState => cVgeneratorState,
);

export const selectLoading = createSelector(
  [selectDomain],
  cVgenerator => cVgenerator.loading,
);
export const selectUserInsertSuccess = createSelector(
  [selectDomain],
  cVgenerator => cVgenerator.userData,
);
export const selectUserInsertFailed = createSelector(
  [selectDomain],
  cVgenerator => cVgenerator.userInsertFailed,
);
export const selectUserInsertData = createSelector(
  [selectDomain],
  cVgenerator => cVgenerator.userRequest,
);
export const selectorIsSubmitted = createSelector(
  [selectDomain],
  globalState => globalState.isSubmitted,
);

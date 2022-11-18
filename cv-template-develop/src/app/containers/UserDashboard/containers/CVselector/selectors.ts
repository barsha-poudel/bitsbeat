import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.cVselector || initialState;

export const selectCVselector = createSelector(
  [selectDomain],
  cVselectorState => cVselectorState,
);
export const SelectSuccess = createSelector(
  [selectDomain],
  cVSelectorState => cVSelectorState.success,
);
export const SelectError = createSelector(
  [selectDomain],
  cVSelectorState => cVSelectorState.error,
);
export const SelectRequestSuccess = createSelector(
  [selectDomain],
  cVSelectorState => cVSelectorState.requestData,
);

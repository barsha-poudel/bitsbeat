/* --- STATE --- */
export interface CVgeneratorState {
  loading: boolean;
  userInsertSuccess: any;
  userInsertFailed: any;
  userData: any;
  userSuccess: any;
  userError: any;
  userRequest: any;
  isSubmitted: any;
}

export type ContainerState = CVgeneratorState;

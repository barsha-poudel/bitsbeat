/* --- STATE --- */
export interface DashboardState {
  loading: boolean;
  userInsertSuccess: any;
  userInsertFailed: any;
  userInsertData: any;
}

export enum DashboardErrorType {
  LOGOUT_FAILURE = 1,
  INTERNAL_SERVER_ERROR = 2,
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'DashboardState' keyword.
*/
export type ContainerState = DashboardState;

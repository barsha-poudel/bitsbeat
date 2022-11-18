import { Users, UsersData } from 'types/Users';

/* --- STATE --- */
export interface UsersState {
  loading: boolean;
  error?: RepoErrorType | null;
  allUsersData?: any;
  usersData?: UsersData;
  usersRegisterData?: any;
  userId?: string;
  singleUserData?: any;
  userMessage?: any;
  deletedId?: string;
  errorResponse?: any;
  stateList?: any;
}

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = UsersState;

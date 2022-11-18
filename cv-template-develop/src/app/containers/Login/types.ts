/* --- STATE --- */
export interface LoginState {
  loading: boolean;
  loginRequest: any;
  loginSuccess: any;
  loginFailed: any;
  loginData: any;
  saveLoginData: any;
  successMessage: any;
  errorMessage: any;
  userTokenSuccess: any;
  userTokenFailed: any;
  tokenSuccessMessage: any;
  tokenFailedMessage: any;
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'LoginState' keyword.
*/
export type ContainerState = LoginState;

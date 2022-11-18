import { UsersState } from 'app/containers/Signup/types';
import { CVgeneratorState } from 'app/containers/UserDashboard/containers/CVgenerator/types';
import { CVselectorState } from 'app/containers/UserDashboard/containers/CVselector/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { LoginState } from 'app/containers/Login/types';

import { DashboardState } from '../app/containers/UserDashboard/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  users?: UsersState;

  cVgenerator?: CVgeneratorState;
  cVselector?: CVselectorState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  login?: LoginState;
  global?: DashboardState;
}

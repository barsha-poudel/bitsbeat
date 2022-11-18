/**
 * Asynchronously loads the component for UserDashboard
 */

import { lazyLoad } from 'utils/loadable';

const UserDashboard = lazyLoad(
  () => import('./index'),
  module => module.UserDashboard,
);

export default UserDashboard
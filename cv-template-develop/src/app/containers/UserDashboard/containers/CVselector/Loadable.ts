/**
 *
 * Asynchronously loads the component for CVselector
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CVselector = lazyLoad(
  () => import('./index'),
  module => module.CVselector,
);

/**
 *
 * Asynchronously loads the component for CVgenerator
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CVgenerator = lazyLoad(
  () => import('./index'),
  module => module.CVgenerator,
);

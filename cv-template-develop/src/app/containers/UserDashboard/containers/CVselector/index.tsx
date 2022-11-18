/**
 *
 * CVselector
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectCVselector } from './selectors';
import { cVselectorSaga } from './saga';

interface Props {}

export function CVselector(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: cVselectorSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cVselector = useSelector(selectCVselector);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>CVselector</title>
        <meta name="description" content="Description of CVselector" />
      </Helmet>
      <div></div>
    </>
  );
}

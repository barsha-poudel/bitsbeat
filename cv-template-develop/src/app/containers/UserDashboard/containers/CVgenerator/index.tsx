/**
 *
 * CVgenerator
 *
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { cVgeneratorActions } from './slice';
import { selectCVgenerator } from './selectors';
import { cVgeneratorSaga } from './saga';
import Forms from './Forms';

interface Props {}
const initialState = {
  summary: '',
  role: '',
  website: '',
  social: [],
  education: [],
  work: [],
  certification: [],
  industryKnowledge: [],
  programmingSkills: [],
  tools: [],
};

export function CVgenerator(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: cVgeneratorSaga });

  const [data, setData] = useState<any>(initialState);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cVgenerator = useSelector(selectCVgenerator);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const handleChange = evt => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  };

  // handleEducationChange

  // handleEducationAdd
  const handleEducationAdd = (evt, education) => {
    evt.preventDefault();
    console.log(education);
    let datacopy = { ...data };
    datacopy.education.push(education);
    setData(datacopy);
  };
  const handleEducationDelete = (evt, index) => {
    evt.preventDefault();
    const filterdata = [...data.education];
    const deleteData = filterdata.filter((object, ind) => object.index != ind);
    setData(deleteData);
  };

  const handleWorkDelete = (evt, index) => {
    evt.preventDefault();
    const filterdata = [...data.work];
    const deleteData = filterdata.filter((object, ind) => object.index != ind);
    setData(deleteData);
  };

  const handleCertificationDelete = (evt, index) => {
    evt.preventDefault();
    const filterdata = [...data.certification];
    const deleteData = filterdata.filter((object, ind) => object.index != ind);
    setData(deleteData);
  };
  const handleSocialDelete = (evt, index) => {
    evt.preventDefault();
    const filterdata = [...data.certification];
    const deleteData = filterdata.filter((object, ind) => object.index != ind);
    setData(deleteData);
  };
  const handleWorkAdd = (evt, work) => {
    evt.preventDefault();
    let datacopy = { ...data };
    datacopy.work.push(work);
    console.log(datacopy, 'herereasdsad');
    setData(datacopy);
  };

  const handleCertificationAdd = (evt, certification) => {
    evt.preventDefault();
    console.log(certification);
    let datacopy = { ...data };
    datacopy.certification.push(certification);
    setData(datacopy);
  };
  const handleSocialAdd = (evt, social) => {
    evt.preventDefault();
    let datacopy = { ...data };
    datacopy.social.push(social);
    setData(datacopy);
  };

  const onSubmitForm = (evt: any) => {
    console.log(data);
    // const value = {
    //   summary:
    //     ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui velit, malesuada a risus eget, dapibus semper neque. Integer porttitor tempor mollis. Mauris maximus mauris sed tellus rhoncus venenatis. Etiam id dui ac dolor elementum auctor non nec nisi. Integer cursus massa vitae orci semper viverra.',
    //   role: 'lorem ipsum',
    //   website: 'https://longdogechallenge.com',
    //   social: [
    //     {
    //       profile: 'github',
    //       url: 'https://longdogechallenge.com/',
    //     },
    //     {
    //       profile: 'linkedin',
    //       url: 'https://longdogechallenge.com/',
    //     },
    //   ],
    //   education: [
    //     {
    //       institution: 'institution 2',
    //       startDate: '2022-10-20T00:00:00.000Z',
    //       endDate: '2022-10-20T00:00:00.000Z',
    //       course: 'Course Two Course',
    //       location: 'street, city, state',
    //     },
    //     {
    //       institution: 'institution 2',
    //       startDate: '2022-10-20T00:00:00.000Z',
    //       endDate: '2022-10-20T00:00:00.000Z',
    //       course: 'Course One Course',
    //       location: 'street, city, state',
    //     },
    //   ],
    //   work: [
    //     {
    //       organization: 'organization 1',
    //       position: 'position position',
    //       startDate: '2022-10-20T00:00:00.000Z',
    //       endDate: '2022-10-20T00:00:00.000Z',
    //       summary:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui velit, malesuada a risus eget, dapibus semper neque. Integer porttitor tempor mollis.',
    //       description: [
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum ipsum',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //       ],
    //     },
    //     {
    //       organization: 'organization 2',
    //       position: 'position  lorem ipsum',
    //       startDate: '2022-10-20T00:00:00.000Z',
    //       endDate: '2022-10-20T00:00:00.000Z',
    //       summary:
    //         ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui velit, malesuada a risus eget, dapibus semper neque. Integer porttitor tempor mollis.',
    //       description: [
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum ipsum',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //       ],
    //     },
    //     {
    //       organization: 'organization 3',
    //       position: 'consectetur adipiscing sit',
    //       startDate: '2022-10-20T00:00:00.000Z',
    //       endDate: '2022-10-20T00:00:00.000Z',
    //       summary:
    //         ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui velit, malesuada a risus eget, dapibus semper neque. Integer porttitor tempor mollis.',
    //       description: [
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum ipsum',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum',
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //       ],
    //     },
    //   ],
    //   certification: [
    //     {
    //       institution:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //       course: 'LLorem ipsum dolor sit amet',
    //       startDate: '2022-10-20T00:00:00.000Z',
    //       endDate: '2022-10-20T00:00:00.000Z',
    //     },
    //   ],
    //   industryKnowledge: [
    //     'product design',
    //     'user interface',
    //     'user experience',
    //     'interaction design',
    //   ],
    //   programmingSkills: ['HTML', 'CSS', 'JQUERY', 'React'],
    //   tools: ['figma', 'XD', 'blender'],
    // };
    evt.preventDefault();
    dispatch(cVgeneratorActions.userDataRequest({ ...data }));
  };

  return (
    <>
      <Helmet>
        <title>CVgenerator</title>
        <meta name="description" content="Description of CVgenerator" />
      </Helmet>
      <Forms
        handleChange={handleChange}
        onSubmitForm={onSubmitForm}
        data={data}
        handleEducationAdd={handleEducationAdd}
        handleWorkAdd={handleWorkAdd}
        handleCertificationAdd={handleCertificationAdd}
        handleSocialAdd={handleSocialAdd}
        handleEducationDelete={handleEducationDelete}
        handleWorkDelete={handleWorkDelete}
        handleCertificationDelete={handleCertificationDelete}
        handleSocialDelete={handleSocialDelete}
      />
    </>
  );
}

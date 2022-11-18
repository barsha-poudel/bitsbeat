import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Datepicker from 'react-datepicker';
import TagsInput from 'app/containers/UserDashboard/components/TagsInput';

const work = {
  organization: '',
  position: '',
  startDate: '',
  endDate: '',
  summary: '',
  description: [],
};

interface Props {
  handleWorkAdd: any;
  workList: any;
  handleWorkDelete: any;
}

const Work = (props: Props) => {
  const [data, setData] = useState<any>(work);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { handleWorkAdd, workList, handleWorkDelete } = props;
  const handleWorkChange = evt => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  };
  const handleStartDateChange = date => {
    console.log(date?.toLocaleString('en-CA').split(',')[0]);
    setData({ ...data, startDate: date.toLocaleString('en-CA').split(',')[0] });
    setStartDate(date);
  };
  const handleEndDateChange = date => {
    console.log(date?.toLocaleString('en-CA').split(',')[0]);
    setData({ ...data, endDate: date.toLocaleString('en-CA').split(',')[0] });
    setEndDate(date);
  };

  return (
    <>
      <h4>Work Experience</h4>
      {!!workList?.length &&
        workList.map((workLists, index) => (
          <div key={Math.random()} className='after-add'>
             <span>Organization:</span><p>{workLists.organization}</p>
             <span>Position:</span><p>{workLists.position}</p>
             <span>Start Date:</span><p>{workLists.startDate}</p>
             <span>End Date:</span><p>{workLists.endDate}</p>
             <span>Summary:</span><p>{workLists.summary}</p>
             <span>Description:</span> <p>{workLists.description}</p>
            <button className='delete-btn' onClick={evt => handleWorkDelete(evt, index)}>
              DELETE
            </button>
          </div>
        ))}
      <section>
        <div className="fill-form">
          <div className="fill-form__left">
            <Form style={{display: 'flex', gap: '24px', flexWrap:'wrap' }}>
              <Form.Group className=" form" controlId="formBasicJob">
                <Form.Control
                  type="text"
                  name="organization"
                  placeholder=" "
                  className="form__input"
                  value={data.organization || ''}
                  onChange={handleWorkChange}
                />
                <Form.Label className="form__label">
                  Organization Name
                </Form.Label>
              </Form.Group>
              <Form.Text className="error__msg">
                <span className="error__icon">i</span> We'll never share your
                email with anyone else.
              </Form.Text>

              <Form.Group className=" form" controlId="formBasicOrganiztion">
                <Form.Control
                  type="text"
                  name="position"
                  placeholder=" "
                  className="form__input"
                  value={data.position || ''}
                  onChange={handleWorkChange}
                />
                <Form.Label className="form__label">position</Form.Label>
              </Form.Group>
              <Form.Text className="error__msg">
                <span className="error__icon">i</span> We'll never share your
                email with anyone else.
              </Form.Text>

              <Form.Group className=" form" controlId="formBasicAddress">
                <Form.Control
                  type="text"
                  name="summary"
                  placeholder=" "
                  className="form__input"
                  value={data.summary || ''}
                  onChange={handleWorkChange}
                />
                <Form.Label className="form__label">Summary</Form.Label>
              </Form.Group>
              <Form.Text className="error__msg">
                <span className="error__icon">i</span> We'll never share your
                email with anyone else.
              </Form.Text>
              <div className="date-picker">
                <div>
                  <Form.Label>Start Date</Form.Label>
                  <Datepicker
                    selected={startDate}
                    name="startdate"
                    onChange={date => handleStartDateChange(date)}
                  />
                </div>

                <div>
                  <Form.Label>End Date</Form.Label>
                  <Datepicker
                    selected={endDate}
                    name="enddate"
                    onChange={date => handleEndDateChange(date)}
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>
        <Form.Group style={{marginTop:"16px",width:"auto", height:"auto"}}
                className="mb-3 text-area"
                controlId="exampleForm.ControlTextarea1"
              >
                <TagsInput
                  name="description"
                  onChange={handleWorkChange}
                  tags={data.description}
                  placeholder="Desctiption"
                />
              </Form.Group>
        <button
          style={{
            all: 'unset',
            padding: '8px 35px',
            background: '#1a3356',
            marginTop: '12px',
            color: 'white',
            borderRadius: '4px',
          }}
          onClick={evt => {
            handleWorkAdd(evt, data);
            setData(work);
          }}
        >
          ADD
        </button>

        <br />
        <br />
      </section>
    </>
  );
};
export default Work;

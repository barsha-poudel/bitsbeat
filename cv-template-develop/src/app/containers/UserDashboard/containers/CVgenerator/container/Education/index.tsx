import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Datepicker from 'react-datepicker';

// import Datepicker from 'react-date-picker';
const educationState = {
  institution: '',
  startDate: '',
  endDate: '',
  course: '',
  location: '',
};
interface Props {
  handleEducationAdd: any;
  education: any;
  handleEducationDelete: any;
}
const EducationForm = (props: Props) => {
  const [data, setData] = useState<any>(educationState);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { handleEducationAdd, education, handleEducationDelete } = props;

  const handleEducationChange = evt => {
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
        <h4>Education</h4>
      {!!education?.length &&
        education?.map((each, index) => (
          
          <div key={Math.random()} className="after-add">
            <span>Institution:</span><p> {each.institution}</p>
            <span>Start Date:</span> <p>{each.startDate}</p>
            <span>End Date:</span> <p>{each.endDate}</p>
            <span>Course:</span> <p>{each.course}</p>
            <span>Location:</span> <p>{each.location}</p>
            <button className='delete-btn' onClick={evt => handleEducationDelete(evt, index)}>
              DELETE
            </button>
          </div>
         
      
        ))}
      <Form style={{ display: 'flex', gap: '24px', flexWrap:'wrap'}}>
        <Form.Group className=" form" controlId="formBasicDegree">
          <Form.Control
            type="text"
            name="institution"
            placeholder=" "
            className="form__input"
            value={data.institution || ''}
            onChange={handleEducationChange}
          />
          <Form.Label className="form__label">Degree</Form.Label>
        </Form.Group>
        <Form.Text className="error__msg">
          <span className="error__icon">i</span> We'll never share your email
          with anyone else.
        </Form.Text>

        <Form.Group className=" form" controlId="formBasicUniversity">
          <Form.Control
            type="text"
            name="course"
            placeholder=" "
            className="form__input"
            value={data.course || ''}
            onChange={handleEducationChange}
          />
          <Form.Label className="form__label">University</Form.Label>
        </Form.Group>
        <Form.Text className="error__msg">
          <span className="error__icon">i</span> We'll never share your email
          with anyone else.
        </Form.Text>

        <Form.Group className=" form" controlId="formBasicLocation">
          <Form.Control
            type="text"
            name="location"
            placeholder=" "
            className="form__input"
            value={data.location || ''}
            onChange={handleEducationChange}
          />
          <Form.Label className="form__label">Location</Form.Label>
        </Form.Group>
        <Form.Text className="error__msg">
          <span className="error__icon">i</span> We'll never share your email
          with anyone else.
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
              handleEducationAdd(evt, data);
              setData(educationState);
            }}
          >
            ADD
          </button>
    </>
  );
};
export default EducationForm;

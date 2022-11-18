import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Datepicker from 'react-datepicker';

const certification = {
  institution: '',
  course: '',
  startDate: '',
  endDate: '',
};
interface Props {
  handleCertificationAdd: any;
  certificationlist: any;
  handleCertificationDelete: any;
}
const Certification = (props: Props) => {
  const [data, setData] = useState<any>(certification);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const {
    handleCertificationAdd,
    certificationlist,
    handleCertificationDelete,
  } = props;

  const handlCertificationChange = evt => {
    evt.preventDefault();
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
      <h4>Certification</h4>

      <div>
        {!!certificationlist?.length &&
          certificationlist?.map((certificationLists, index) => (
            <div className="after-add" key={Math.random()}>
               <span>Institution:</span><p> {certificationLists.institution}</p>
               <span>Course:</span>  <p>{certificationLists.course}</p>
               <span>Start Date:</span> <p>{certificationLists.startDate}</p>
               <span>End Date:</span>  <p>{certificationLists.endDate}</p>
              <button className='delete-btn' onClick={evt => handleCertificationDelete(evt, index)}>
                DELETE
              </button>
            </div>
          ))}
      </div>
      <section>
        <div className="fill-form">
          <div className="fill-form__left">
            <Form style={{ display: 'flex', gap: "24px",  }}>
              <Form.Group className=" form" controlId="formBasicJob">
                <Form.Control
                  type="text"
                  name="institution"
                  placeholder=" "
                  className="form__input"
                  value={data.institution || ''}
                  onChange={handlCertificationChange}
                />
                <Form.Label className="form__label">Institution</Form.Label>
              </Form.Group>
              <Form.Text className="error__msg">
                <span className="error__icon">i</span> We'll never share your
                email with anyone else.
              </Form.Text>

              <Form.Group className=" form" controlId="formBasicOrganiztion">
                <Form.Control
                  type="text"
                  name="course"
                  placeholder=" "
                  className="form__input"
                  value={data.course || ''}
                  onChange={handlCertificationChange}
                />
                <Form.Label className="form__label">Course</Form.Label>
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
            handleCertificationAdd(evt, data);
            setData(certification);
          }}
        >
          ADD
        </button>
      </section>
    </>
  );
};
export default Certification;

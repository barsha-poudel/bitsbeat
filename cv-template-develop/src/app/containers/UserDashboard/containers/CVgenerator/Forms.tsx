import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TagsInput from '../../components/TagsInput';
import Education from './container/Education';
import Work from './container/Work';
import Certification from './container/Certification';
import Social from './container/Social';

interface Props {
  handleChange: any;
  onSubmitForm: any;
  data: any;
  handleEducationAdd: any;
  handleWorkAdd: any;
  handleCertificationAdd: any;
  handleSocialAdd: any;
  handleEducationDelete: any;
  handleWorkDelete: any;
  handleCertificationDelete: any;
  handleSocialDelete: any;
}

function Forms(props: Props) {
  const {
    handleChange,
    onSubmitForm,
    data,
    handleEducationAdd,
    handleCertificationAdd,
    handleWorkAdd,
    handleSocialAdd,
    handleEducationDelete,
    handleWorkDelete,
    handleCertificationDelete,
    handleSocialDelete,
  } = props;

  return (
    <div>
      <div className="containerx">
        <h4>Personal Detail</h4>
      </div>
      <section>
        <div className="containerx">
          <div className="fill-form">
            <div className="fill-form__left">
              <Form className="flex-form">
                <Form.Group className=" form" controlId="formBasicSummary">
                  <Form.Control
                    type="text"
                    name="summary"
                    placeholder=" "
                    className="form__input"
                    value={data.summary || ''}
                    onChange={handleChange}
                  />
                  <Form.Label className="form__label">Summary</Form.Label>
                </Form.Group>
                <Form.Text className="error__msg">
                  <span className="error__icon">i</span> We'll never share your
                  email with anyone else.
                </Form.Text>

                <Form.Group className=" form" controlId="formBasicRole">
                  <Form.Control
                    type="text"
                    name="role"
                    placeholder=" "
                    className="form__input"
                    value={data.role || ''}
                    onChange={handleChange}
                  />
                  <Form.Label className="form__label">Role</Form.Label>
                </Form.Group>
                <Form.Text className="error__msg">
                  <span className="error__icon">i</span> We'll never share your
                  email with anyone else.
                </Form.Text>

                <Form.Group className=" form" controlId="formBasicWebsite">
                  <Form.Control
                    type="text"
                    name="website"
                    placeholder=" "
                    className="form__input"
                    value={data.website || ''}
                    onChange={handleChange}
                  />
                  <Form.Label className="form__label">Website URL</Form.Label>
                </Form.Group>
                <Form.Text className="error__msg">
                  <span className="error__icon">i</span> We'll never share your
                  email with anyone else.
                </Form.Text>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Social
          handleSocialAdd={handleSocialAdd}
          social={data.social}
          handleSocialDelete={handleSocialDelete}
        />
      </div>

      <div className="containerx">
        <Education
          handleEducationAdd={handleEducationAdd}
          education={data.education}
          handleEducationDelete={handleEducationDelete}
        />
      </div>
      <div className="containerx">
        <div>
          <div>
            <Work
              handleWorkAdd={handleWorkAdd}
              workList={data.work}
              handleWorkDelete={handleWorkDelete}
            />
          </div>

          <div>
            <Certification
              handleCertificationAdd={handleCertificationAdd}
              certificationlist={data.certification}
              handleCertificationDelete={handleCertificationDelete}
            />
          </div>
          <section>
            <h4>Programming Skills</h4>
            <TagsInput
              name="programmingSkills"
              onChange={handleChange}
              tags={data.programmingSkills}
              placeholder="Programming Skills"
            />
          </section>

          <section>
            <h4>Industry Skills</h4>
            <TagsInput
              name="industryKnowledge"
              onChange={handleChange}
              tags={data.industryKnowledge}
              placeholder="Industry Skills"
            />
          </section>

          <section>
            <h4>Tools</h4>
            <TagsInput
              name="tools"
              onChange={handleChange}
              tags={data.tools}
              placeholder="Tools"
            />
          </section>
        </div>
      </div>
      <div className="containerx">
        <button
        className='submit-last'
          style={{
            all: 'unset',
            padding: '8px 35px',
            background: '#1a3356',
            marginTop: '12px',
            color: 'white',
            borderRadius: '4px',
          }}
          type="submit"
          onClick={evt => onSubmitForm(evt)}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
export default Forms;

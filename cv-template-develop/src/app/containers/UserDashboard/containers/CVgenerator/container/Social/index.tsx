import React from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

const socialState = {
  profile: '',
  url: '',
};
interface Props {
  social: any;
  handleSocialAdd: any;
  handleSocialDelete: any;
}

const Social = (props: Props) => {
  const [data, setData] = useState<any>(socialState);

  const { handleSocialAdd, social, handleSocialDelete } = props;

  const handleSocialChange = event => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="containerx">
      <h4>Social</h4>
      <div>
        {!!social?.length &&
          social?.map((each, index) => (
            <div className='after-add'>
              <p>{each.profile}</p>
              <p>{each.url}</p>
              <button className='delete-btn' onClick={evt => handleSocialDelete(evt, index)}>
                DELETE
              </button>
            </div>
          ))}
      </div>
      <section>
        <div className="fill-form">
          <div className="fill-form__left">
            <Form style={{ display: 'flex', gap: '24px' }}>
              {/* <Form.Group className=" form" controlId="formBasicJob">
                <Form.Control
                  type="text"
                  name="profile"
                  placeholder=" "
                  className="form__input"
                  value={data.profile || ''}
                  onChange={handleSocialChange}
                />
                <Form.Label className="form__label">Profile</Form.Label>
              </Form.Group>
              <Form.Text className="error__msg">
                <span className="error__icon">i</span> We'll never share your
                email with anyone else.
              </Form.Text> */}

              <Form.Control
                as="select"
                aria-label="Default select example"
                style={{ flexBasis: '20%', height: '48px' }}
                name="profile"
                onChange={handleSocialChange}
              >
                <option>Select Profile</option>
                <option value="github">GitHub</option>
                <option value="facebook">Facebook</option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram</option>
              </Form.Control>

              <Form.Group className=" form" controlId="formBasicOrganiztion">
                <Form.Control
                  type="text"
                  name="url"
                  placeholder=" "
                  className="form__input"
                  value={data.url || ''}
                  onChange={handleSocialChange}
                />
                <Form.Label className="form__label">URL</Form.Label>
              </Form.Group>
              <Form.Text className="error__msg">
                <span className="error__icon">i</span> We'll never share your
                email with anyone else.
              </Form.Text>
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
            handleSocialAdd(evt, data);
            setData(socialState);
          }}
        >
          ADD
        </button>
      </section>
    </div>
  );
};
export default Social;

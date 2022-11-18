import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/signup.css';

interface Props {
  userData: any;
  onSubmitForm: any;
  handleChange: any;
  isLoading: boolean;
  handlePasswordVisibility: any;
  handleConfirmPasswordVisibility :any;
  showPassword:any;
  showConfirmPassword:any;
  errors: any;
}

export default function RegisterForm(props: Props) {
  const { userData, onSubmitForm, handleChange,  handlePasswordVisibility, errors, showPassword,handleConfirmPasswordVisibility, showConfirmPassword } = props;

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <Form onSubmit={onSubmitForm}>
          <h2 className="mb-4 font-weight-bold">Join Us</h2>

          <div className={`mb ${errors.fullname? 'if-error': ''}`}>
            <Form.Group className=" mt-4 form" controlId="formBasicFName">
              <Form.Control
                type="text"
                placeholder=" "
                name="fullname"
                className="form__input"
                value={userData.fullname ?? ''}
                onChange={handleChange}
              />
              <Form.Label className="form__label">Full Name</Form.Label>
            </Form.Group>
          
            <Form.Text className="error__msg">
              <div>
              <span className="error__icon">i</span>  {errors.fullname}
              </div>
            </Form.Text>
          </div>

          <div className={`mb ${errors.email? 'if-error': ''}`}>
            <Form.Group className="form" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder=" "
                name="email"
                className="form__input"
                value={userData.email ?? ''}
                onChange={handleChange}
              />
              <Form.Label className="form__label">Email</Form.Label>
            </Form.Group>
            <Form.Text className="error__msg">
             <div><span className="error__icon">i</span>
               {errors.email}</div> 
              
            </Form.Text>

          </div>

          <Row>
            <Col lg={6}>
              <div className={`mb ${errors.password? 'if-error': ''}`}>
                <Form.Group
                  className=" mt-4 form"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type={showPassword? 'text' : 'password'}
                    placeholder=" "
                    name="password"
                    className="form__input"
                    value={userData.password ?? ''}
                    onChange={handleChange}
                  />
                  <Form.Label className="form__label">Password</Form.Label>
                  <span className="icon" onClick={handlePasswordVisibility}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="eye1">
                    <path
                      id="Vector"
                      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="eye-off1"
                    style={{ visibility: showPassword ? 'visible' : 'hidden' }}
                  >
                    <path
                      id="Vector"
                      d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M1 1L23 23"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
                  
                </Form.Group>
                <Form.Text className="error__msg">
                <div>
              <span className="error__icon">i</span>  {errors.password}
              </div>
            </Form.Text>
              </div>
            </Col>
            <Col>
              <div className={`mb ${errors.confirmpassword? 'if-error': ''}`}>
                <Form.Group
                  className=" mt-4 form"
                  controlId="formBasicConfrimPassword"
                >
                  <Form.Control
                    type={showConfirmPassword? 'text' : 'password'}
                    placeholder=" "
                    name="confirmpassword"
                    className="form__input"
                    value={userData.confirmpassword ?? ''}
                    onChange={handleChange}
                  />
                  <Form.Label className="form__label">
                    Confirm Password
                  </Form.Label>
                  <span className="icon" onClick={handleConfirmPasswordVisibility}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="eye">
                    <path
                      id="Vector"
                      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="eye-off"
                    style={{ visibility: showConfirmPassword ? 'visible' : 'hidden' }}
                  >
                    <path
                      id="Vector"
                      d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M1 1L23 23"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
                </Form.Group>

                <Form.Text className="error__msg">
                <div>
              <span className="error__icon">i</span> 
               {errors.confirmpassword}
              </div>
            </Form.Text>
              </div>
            </Col>
          </Row>
          <div className={`mb ${errors.address? 'if-error': ''}`}>
            <Form.Group className=" mt-4 form" controlId="formBasicFName">
              <Form.Control
                type="text"
                placeholder=" "
                name="address"
                className="form__input"
                value={userData.address ?? ''}
                onChange={handleChange}
              />
              <Form.Label className="form__label">Address</Form.Label>
            </Form.Group>
            <Form.Text className="error__msg">
            <div>
              <span className="error__icon">i</span> 
               {errors.address}
              </div>
            </Form.Text>
          </div>

          <div className={`mb ${errors.phone? 'if-error': ''}`}>
            <Form.Group className=" mt-4 form" controlId="formBasicFName">
              <Form.Control
                type="text"
                placeholder=" "
                name="phone"
                className="form__input"
                value={userData.phone ?? ''}
                onChange={handleChange}
              />
              <Form.Label className="form__label">Phone Number</Form.Label>
            </Form.Group>
            <Form.Text className="error__msg">
            <div>
              <span className="error__icon">i</span>
               {errors.phone}
              </div>
            </Form.Text>
          </div>

          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
      </div>
      <br />
      Back to <Link to="/">Login</Link> Page
    </>
  );
}

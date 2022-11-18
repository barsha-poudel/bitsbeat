import { BASE_URL } from 'Constants/uris';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectorIsSubmitted } from '../../containers/CVgenerator/selectors';
import history from 'utils/history';

export default function Header() {
  const token = localStorage.getItem('token');
  const isSubmitted = useSelector(selectorIsSubmitted);
  console.log(isSubmitted);
  const handleClick = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <header>
      <div className="containerx">
        <div className="header-inside">
          <div className="header-inside--left">CV MAKER</div>
          <div className="header-inside--right">
            {isSubmitted && (
              <button className="dwld-btn">
                <a
                  href={`${BASE_URL}/resume/getPdf?token=${token}`}
                  target="_blank"
                ></a>
              </button>
            )}
            <figure>
              <img src="" alt="" />
            </figure>
            <button onClick={handleClick}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}

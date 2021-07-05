import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../images/informovie-white.png';
import LoginPageImage from '../images/loginPageImage.jpg';
import './loginPage.scss';

export const LoginPage = () => {
  const [username, setUsername] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    if (window.sessionStorage.getItem('username')?.length) {
      history.push('/search');
    }
  }, [username]);

  return (
    <div className='loginPage'>
      <div className='loginPageContainer'>
        <div className='contentCotainer'>
          <div className='navBar'>
            <img alt='Logo' src={Logo} />
          </div>
          <div className='welcomeSection'>
            <div className='textConteiner'>
              <h1>Welcome</h1>
              <p>
                Get information about films, cast, taglines, plots, crew,
                reviews, ratings and much more. Join Millions of users and get
                access to over 20,000+ APIs.
              </p>
              <form
                onSubmit={(e: any) => {
                  e.preventDefault();
                  setUsername(e.target.username.value);
                  window.sessionStorage.setItem(
                    'username',
                    e.target.username.value
                  );
                  window.sessionStorage.setItem('favArray', JSON.stringify([]));
                }}
              >
                <input
                  tabIndex={-1}
                  className='loginInput'
                  type='text'
                  name='username'
                  required
                  placeholder='Enter your name'
                />

                <button tabIndex={-1} className='loginButton' type='submit'>
                  Login
                </button>
              </form>
            </div>
            <img className='imgConteiner' alt='films' src={LoginPageImage} />
          </div>
        </div>
        <svg
          className='wave'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#282E3A'
            fill-opacity='1'
            d='M0,64L80,101.3C160,139,320,213,480,234.7C640,256,800,224,960,213.3C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </div>
    </div>
  );
};

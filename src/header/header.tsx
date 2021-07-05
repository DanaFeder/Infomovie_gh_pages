import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../modal/modal';
import { searchMovieById } from '../searchService/searchService';
import { Movie } from '../types';
import Logo from '../images/informovie-white.png';
import './header.scss';

const Header = () => {
  const history = useHistory();
  const userName = window.sessionStorage.getItem('username');
  const [favMoviesList, setfavMoviesList] = useState<Movie[]>([] as Movie[]);

  function logoutUser(): void {
    window.sessionStorage.setItem('username', '');
    history.push('/');
  }

  async function getFavMovies() {
    let storageFavMovies: Movie[] = [];
    let storageFavMoviesFromId = JSON.parse(
      window.sessionStorage.getItem('favArray') ?? ''
    );

    await Promise.all(
      storageFavMoviesFromId?.map(async (id: string) => {
        let response = await searchMovieById(id);
        storageFavMovies?.push(response);
      })
    );
    setfavMoviesList(storageFavMovies);
  }

  return (
    <div className='header'>
      <img className='logo' alt='Logo' src={Logo} />
      <div className='actions'>
        <button tabIndex={-1} onClick={() => logoutUser()}>
          Logout
        </button>
        <i className='fas fa-sign-out-alt fa-lg' onClick={() => logoutUser()} />
        <button
          tabIndex={-1}
          type='button'
          data-toggle='modal'
          data-target='#favModal'
          onClick={() => getFavMovies()}
        >
          Favorites
        </button>
        <i
          data-toggle='modal'
          data-target='#favModal'
          className='fas fa-heart fa-lg'
          onClick={() => getFavMovies()}
        />
        <span>
          Hello <b>{userName}</b>
        </span>
      </div>

      <Modal moviesList={favMoviesList} id='favModal' />
    </div>
  );
};

export default Header;

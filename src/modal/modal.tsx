import React, { useState } from 'react';
import FavoriteButton from '../favoriteButton/favoriteButton';
import { Movie } from '../types';
import './modal.scss';

const Modal = (props: {
  movieDetails?: Movie;
  id: string;
  moviesList?: Movie[];
}) => {
  const [showMoreContent, setShowMoreContent] = useState(true);

  function renderMovieContent() {
    return (
      <>
        <img src={props.movieDetails?.Poster} alt='moviePoster' />
        <div className='movieDetaildHeader'>
          <h1>{props.movieDetails?.Title}</h1>
          <div className='movieDetails'>
            <div>Type: {props.movieDetails?.Type}</div>
            <div>Release year:{props.movieDetails?.Year}</div>
            {props.movieDetails?.Ratings && (
              <>
                <div>
                  Rated {props.movieDetails?.Ratings[1]?.Value} by{' '}
                  {props.movieDetails?.Ratings[1]?.Source}
                </div>
              </>
            )}
            <div>Running time: {props.movieDetails?.Runtime}</div>
          </div>
          <div className='movieDescContainer'>
            <p className={`movieDesc ${showMoreContent && 'moreContent'}`}>
              {props.movieDetails?.Plot}
            </p>
            <button
              tabIndex={-1}
              className={`showMore ${showMoreContent && 'show'}`}
              onClick={() => setShowMoreContent(false)}
            >
              Show More
            </button>
            <button
              tabIndex={-1}
              className={`showLess ${!showMoreContent && 'show'}`}
              onClick={() => setShowMoreContent(true)}
            >
              Show Less
            </button>
          </div>
        </div>
      </>
    );
  }

  function renderfavListContent() {
    return (
      <div className='favList'>
        <h1>Favorites List</h1>
        <div className='favMovieContainer'>
          {props.moviesList?.map((movie: Movie) => {
            return (
              <div className='favMovie'>
                <div
                  className='imgContainer'
                  style={{
                    background: `url(${movie.Poster}) center`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                />

                <div className='favMovieDetails'>
                  <h2>{movie.Title}</h2>
                  <FavoriteButton imdbID={movie.imdbID} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className='modal fade'
      id={props.id}
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <button
            tabIndex={-1}
            className='closeBtn'
            type='button'
            data-dismiss='modal'
            aria-label='Close'
          >
            <i className='fas fa-times fa-2x' />
          </button>
          <div className='modal-body'>
            {props.movieDetails ? renderMovieContent() : renderfavListContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

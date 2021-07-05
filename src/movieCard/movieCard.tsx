import React, { useState } from 'react';
import FavoriteButton from '../favoriteButton/favoriteButton';
import Modal from '../modal/modal';
import { searchMovieById } from '../searchService/searchService';
import { Movie, SearchResult } from '../types';
import './movieCard.scss';

const MovieCard = (props: { movieCard: SearchResult }) => {
  const [movieDetails, setMovieDetails] = useState<Movie>({} as Movie);

  return (
    <>
      <div
        className='movieCard'
        style={{
          background: `url(${props.movieCard.Poster})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='movieCardContainer'>
          <div className='cardHeader'>
            <div className='year'>{props.movieCard.Year}</div>
            <FavoriteButton imdbID={props.movieCard.imdbID} />
          </div>
          <div className='cardBody'>
            <h3>{props.movieCard.Title}</h3>
            <span>{props.movieCard.Type}</span>
          </div>
          <div className='cardFooter'>
            <button
              tabIndex={-1}
              type='button'
              data-toggle='modal'
              data-target={`#${props.movieCard.imdbID}`}
              onClick={(e) =>
                searchMovieById(props.movieCard.imdbID).then((result) =>
                  setMovieDetails(result)
                )
              }
            >
              <span>For more information</span>
              <br />
              <span>Click here</span>
            </button>
          </div>
        </div>
      </div>
      <Modal movieDetails={movieDetails} id={props.movieCard.imdbID} />
    </>
  );
};

export default MovieCard;

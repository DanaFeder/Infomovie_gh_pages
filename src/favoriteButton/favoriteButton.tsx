import React, { useEffect, useState } from 'react';
import './favoriteButton.scss';

const FavoriteButton = (props: { imdbID: string }) => {
  const [movieMarkedAsFav, setMovieMarkedAsFav] = useState(false);
  let storageFavMovies = [];

  useEffect(() => {
    storageFavMovies = JSON.parse(
      window.sessionStorage.getItem('favArray') ?? ''
    );
    storageFavMovies?.includes(props.imdbID) && setMovieMarkedAsFav(true);
  });

  function toggleFav(): void {
    storageFavMovies = JSON.parse(
      window.sessionStorage.getItem('favArray') ?? ''
    );
    let newArr = [];
    if (storageFavMovies?.includes(props.imdbID)) {
      newArr = storageFavMovies.filter((id: string) => id !== props.imdbID);
    } else {
      newArr = [...storageFavMovies, props.imdbID];
    }
    setMovieMarkedAsFav(!movieMarkedAsFav);
    window.sessionStorage.setItem('favArray', JSON.stringify(newArr));
  }

  return (
    <button className='favBtn' tabIndex={-1} onClick={() => toggleFav()}>
      {movieMarkedAsFav ? (
        <i className='fas fa-heart fa-lg' />
      ) : (
        <i className='far fa-heart fa-lg' />
      )}
    </button>
  );
};

export default FavoriteButton;

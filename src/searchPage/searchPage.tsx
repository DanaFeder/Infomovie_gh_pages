import React, { useState, useEffect } from 'react';
import { searchMoviesByQuery } from '../searchService/searchService';
import { SearchResult } from '../types';
import { DebounceInput } from 'react-debounce-input';
import Header from '../header/header';
import MovieCard from '../movieCard/movieCard';
import './searchPage.scss';

export const SearchPage = () => {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchBoxInMiddle, setSearchBoxInMiddle] = useState(true);

  useEffect(() => {
    if (query.length) {
      searchMoviesByQuery(query).then((searchResponse) =>
        setSearchResults(searchResponse.Search)
      );
    }
  }, [query]);

  return (
    <div className='sarchPage'>
      <Header />
      <div className={`searchBoxContainer ${searchBoxInMiddle && 'center'}`}>
        <DebounceInput
          placeholder='Search for movie'
          className='searchBox'
          debounceTimeout={300}
          onChange={(e) => {
            e.preventDefault();
            setQuery(e.target.value);
            e.target.value !== ''
              ? setSearchBoxInMiddle(false)
              : setSearchBoxInMiddle(true);
          }}
        />
      </div>
      <div className={`cardsContainer ${searchBoxInMiddle && 'hidden'}`}>
        {!!searchResults?.length &&
          query.length > 0 &&
          searchResults.map((result, index) => {
            return <MovieCard key={result.imdbID} movieCard={result} />;
          })}
      </div>
    </div>
  );
};

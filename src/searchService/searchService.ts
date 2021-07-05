import { Movie, SearchResponse } from '../types';

export const searchMoviesByQuery = (query: string) : Promise<SearchResponse> => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  } as RequestInit;

  return fetch(`http://www.omdbapi.com/?apikey=a4a8a1ee&s=${query}`, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}

export const searchMovieById = (id: string) : Promise <Movie> => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  } as RequestInit;

  return fetch(`http://www.omdbapi.com/?i=${id}&apikey=a4a8a1ee`, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}
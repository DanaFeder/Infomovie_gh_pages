export interface SearchResult {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export interface SearchResponse {
  Response: string,
  Search: SearchResult[]
  totalResults: string
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Rating[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}
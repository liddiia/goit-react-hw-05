
  import axios from 'axios';

  const myKey =
   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzkwN2Q3MjA3ODk5YTkzZTkyYTc4NTk5ZGU2MGY2MyIsIm5iZiI6MTcyOTk1MTk2My40OTI1Nywic3ViIjoiNjcxNTJhMGNkNWI3OTI2ZTk0NzAyZmUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WaSdnEZ-N_HQrBVnS4rxPVsAqjkor4LZCTZowJHtxE0'
  
  const instanceMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      include_adult: false,
      language: 'en-US',
    },
    headers: {
      accept: 'application/json',
      Authorization: myKey,
    },
  });
  
  export const fetchTrends = async page => {
    const response = await instanceMovies.get(`/trending/movie/day?page=${page}`);
    const data = response.data;
    return data;
  };
  
  export const fetchMoviesId = async id => {
    const response = await instanceMovies.get(`/movie/${id}`);
    const data = response.data;
    return data;
  };
  
  export const fetchMoviesSearch = async (q, page) => {
    const response = await instanceMovies.get(
      `/search/movie?query=${q}&page=${page}`
    );
    const data = response.data;
    return data;
  };
  
  export const fetchMoviesCredits = async id => {
    const response = await instanceMovies.get(`/movie/${id}/credits`);
    const data = response.data;
    return data;
  };
  
  export const fetchMoviesReviews = async id => {
    const response = await instanceMovies.get(`/movie/${id}/reviews`);
    const data = response.data;
    return data;
  };
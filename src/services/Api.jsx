import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers = {
  common: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzkwN2Q3MjA3ODk5YTkzZTkyYTc4NTk5ZGU2MGY2MyIsIm5iZiI6MTcyOTk1MTk2My40OTI1Nywic3ViIjoiNjcxNTJhMGNkNWI3OTI2ZTk0NzAyZmUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WaSdnEZ-N_HQrBVnS4rxPVsAqjkor4LZCTZowJHtxE0",
  },
};

export const getMoviesTrends = async () => {
  const response = await axios.get("/trending/movie/day?language=en-US'");
  return response.data.results;
};

export const getMoviesByQuery = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
};

export const getMoviesDetailsById = async (movyId) => {
  const response = await axios.get(`/movie/${movyId}`);
  return response.data;
};


export const getMoviesCredits = async (movyId) => {
  const response = await axios.get(`/movie/${movyId}/credits`);
    return response.data.cast;
};


export const getMoviesReviews = async (movyId) => {
  const response = await axios.get(`/movie/${movyId}/reviews`);
    return response.data;
};


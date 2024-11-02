import axios from "axios";
import { useEffect, useState } from "react";
import SearchMoviesForm from "../components/SearchMoviesForm/SearchMoviesForm"; 
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";

// const myKey =
//   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzkwN2Q3MjA3ODk5YTkzZTkyYTc4NTk5ZGU2MGY2MyIsIm5iZiI6MTczMDQ4MTU0My4zODc1ODA5LCJzdWIiOiI2NzE1MmEwY2Q1Yjc5MjZlOTQ3MDJmZTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V7p6w5k1gmdoikELoEH9YKoxU0CwKXIiktzq61HSf1o";

// const instanceMovies = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   params: {
//     include_adult: false,
//     language: "en-US",
//   },
//   headers: {
//     accept: "application/json",
//     Authorization: myKey,
//   },
// });

// const fetchMoviesBySearch = async (query, page = 1, perPage = 20) => {
//   const response = await instanceMovies.get(
//     `/search/movie?query=${query}&page=${page}&per_page=${perPage}`
//   );
//   const data = response.data;
//   return data;
// };

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const film = searchParams.get("query");
console.log(film);
  const [searchMovies, setSearchMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     if (!film) return;
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       const data = await fetchMoviesBySearch(film, page);
  //       setSearchMovies(data.results); 
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false); 
  //     }
  //   };
  //   getMovies();
  // }, [film, page]);

  const onSearch = (values) => {
    console.log(values);
    setSearchParams({ query: values });
  };

  return (
    <div>
      <SearchMoviesForm onSearch={onSearch} /> 
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <MovieList movies={searchMovies} />
    </div>
  );
};

export default MoviesPage;

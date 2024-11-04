
import { useEffect, useState } from "react";
import SearchMoviesForm from "../components/SearchMoviesForm/SearchMoviesForm"; 
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import {getMoviesByQuery}from "../services/Api"

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const quer = searchParams.get("query");

  const [searchMovies, setSearchMovies] = useState([]);
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function asyncWrapper() {
      try {
        setLoading(true);
        setError(null);
        const data = await getMoviesByQuery(quer);
        setSearchMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    asyncWrapper();
  }, [quer]);
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

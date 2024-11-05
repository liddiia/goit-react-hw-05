
import { useEffect, useState } from "react";
import SearchMoviesForm from "../components/SearchMoviesForm/SearchMoviesForm"; 
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesByQuery } from "../services/Api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("query");
  console.log("param:",param)
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!param) return; 
    async function asyncWrapper() {
      try {
        setLoading(true);
        setError(null);
        const data = await getMoviesByQuery(param);
        setSearchMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    asyncWrapper();
  }, [param]);

  const onSearch = (values) => {
    if (values.trim()) { 
      console.log("Setting query to:", values);
      setSearchParams({ query: values });
    }
  };

  return (
    <div>
      <SearchMoviesForm onSearch={onSearch} /> 
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {searchMovies.length > 0 ? (
        <MovieList movies={searchMovies} />
      ) : (
        param&&!loading && !error && <p>No movies found.</p>
      )}
    </div>
  );
};

export default MoviesPage;
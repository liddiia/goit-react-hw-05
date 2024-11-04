import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesDetailsById } from "../services/Api.jsx";
import FilmDetails from "../components/FilmDetails/FilmDetails.jsx";

const MovieDetailsPage = () => {
  const location = useLocation();
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams(); // movieId - динамічна частина маршрутизації

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMoviesDetailsById(movieId);
        setFilm(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    asyncWrapper();
  }, [movieId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {film && <FilmDetails film={film}  lication = {location}/>}
    </>
  );
};

export default MovieDetailsPage;


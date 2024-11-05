import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
  Link,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getMoviesDetailsById } from "../services/Api";
import FilmDetails from "../components/FilmDetails/FilmDetails";
import clsx from "clsx";
import css from "../components/FilmDetails/FilmDetails.module.css";
import Loader from "../components/Loader/Loader";

const MovieDetailsPage = () => {
  const location = useLocation();
  console.log("location:", location);

  const backLinkRef = useRef(location.state || "/");

  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

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
      <Link to={backLinkRef.current} className={css.backLink}>
        Go back
      </Link>
      {loading && <Loader />}
      {error && <p className={css.errorMessage}>{error}</p>}

      {film && <FilmDetails film={film} location={location} />}

      <div className={css.detLinkCont}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.detLink, isActive && css.active)
          }
          to="reviews"
          state={{ from: backLinkRef.current }}
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.detLink, isActive && css.active)
          }
          to="cast"
          state={{ from: backLinkRef.current }}
        >
          Cast
        </NavLink>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetailsPage;

import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import css from "./FilmDetails.module.css";
import clsx from "clsx";
const FilmDetails = ({ film }) => {
  const location = useLocation();

  if (!film) {
    return <p>No movie details available</p>;
  }

  return (
    <div className={css.filmDetailsCont}>

      <Link to={location.state ? location.state : "/movies"}>Go back</Link>

      <div>
        <h2 className={css.filmDetailsTitle}>
          Details of film: {film.original_title}
        </h2>

        <img
          className={css.filmImg}
          src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
          alt={film.title}
        />

        <p className={css.filmRelDate}>Release date: {film.release_date}</p>
        <p className={css.FilmDetailsOveriew}>Overview: {film.overview}</p>
      </div>

      <div className={css.detLinkCont}>

        <NavLink
          className={({ isActive }) =>
            clsx(css.detLink, isActive && css.active)
          }
          to="reviews"
        >
          Reviews{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.detLink, isActive && css.active)
          }
          to="cast"
        >
  
          Cast
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default FilmDetails;

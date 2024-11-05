import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
  // import { useNavigate } from "react-router-dom";
import css from "./FilmDetails.module.css";
import clsx from "clsx";
const FilmDetails = ({ film }) => {
  const location = useLocation();
  // const navigate = useNavigate();

  if (!film) {
    return <p>No movie details available</p>;
  }
  // const backUrl = location.state?.from || '/movies';

  // const goBack = () => {
  //   navigate(backUrl);
  // };



  return (
    <div className={css.filmDetailsCont}>
      <Link to={location.state ? location.state : "/"}>Go back</Link>
      {/* <button onClick={goBack} className={css.goBackBtn}>
      Go back
      </button> */}
      <div className={css.filmDetCont}>
        <h2 className={css.filmDetailsTitle}>
          Details of film: {film.original_title}
        </h2>
        <div className={css.filmDetInfoCont}>
          <img
            className={css.filmDetImg}
            src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
            alt={film.title}
          />
          <div className={css.filmDetInfoText}>
            <p className={css.filmRelDate}>Release date: {film.release_date}</p>
            <p className={css.FilmDetailsOveriew}>Overview: {film.overview}</p>
          </div>
        </div>
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

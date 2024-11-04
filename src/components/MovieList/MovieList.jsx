import { NavLink } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={css.movListCont}>
       <ul className={css.movList}>
        {movies.length !== 0 &&
          movies.map((movie) => {
            return (
              <li key={movie.id} className={css.moviListItem}>
                <NavLink to={`/movies/${movie.id}`}>
                  <h3 className={css.moviListTitle}>{movie.title}</h3>
                  <img
                    className={css.moviListImg}
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </NavLink>
                <p className={css.moviListDiscription}>{movie.overview}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;

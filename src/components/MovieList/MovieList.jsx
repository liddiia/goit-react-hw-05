import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import placeholderImage from "../../assets/pexels-17486102.jpg";
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={css.movListCont}>
      <ul className={css.movList}>
        {movies.length !== 0 &&
          movies.map((movie) => {
            return (
              <li key={movie.id} className={css.moviListItem}>
                <Link to={`/movies/${movie.id}`} state={location}>
                  <h3 className={css.moviListTitle}>{movie.title}</h3>
                  <img
                    className={css.moviListImg}
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                        : placeholderImage
                    }
                    alt={movie.title}
                  />
                </Link>
                <p className={css.moviListDiscription}>{movie.overview}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;

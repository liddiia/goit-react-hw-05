import { Link, useLocation } from "react-router-dom";
import css from "./FilmDetails.module.css";

const FilmDetails = ({ film }) => {
  const location=useLocation();
  return (
    <div className={css.filmDetailsCont}>
<Link to= {location.state}>Go back</Link>
      <div>
      <h2 className={css.filmDetailsTitle}>Details of film: {film.original_title}</h2>
      {!film && <p>No movie details available</p>}

      <img 
        className={css.filmImg}
        src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
        alt={film.title}
      />
    <p className={css.filmRelDate}>Release date: {film.release_date}</p> 
      <p className={css.FilmDetailsOveriew}>Overview: {film.overview}</p>
      
</div>
<div>

  <Link > Reviews  </Link>
      <Link>   Cast       </Link>
</div>
    </div>
  );
};

export default FilmDetails;

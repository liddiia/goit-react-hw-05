
import css from "./FilmDetails.module.css";

const FilmDetails = ({ film }) => {

  if (!film) {
    return <p>No movie details available</p>;
  }

  return (
    <div className={css.filmDetailsCont}>
  
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
      
    </div>
  );
};

export default FilmDetails;

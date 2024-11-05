import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { getMoviesCredits } from "../../services/Api";
// import { useLocation, 
import {useParams } from "react-router-dom";
import css from "./MovieCast.module.css"
const MovieCast = () => {
  // const location = useLocation();
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function asyncWrapper() {
      try {
        setLoading(true);
        setError(null);
        const data = await getMoviesCredits(movieId);
        if (data && Array.isArray(data)) {
          setCasts(data);
        } else {
          setCasts([]);
          setError("No cast information available.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    asyncWrapper();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading && <Loading />}
        <ul className={css.castCont}> 
          {casts.length > 0 ? (
            casts.map((cast) => (
              <li className={css.castCard} key={cast.id}>
                <h3 className={css.castName}>{cast.name}</h3>
                {cast.profile_path ? (
                  <img className={css.castFoto}
                   src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={`${cast.name}`}
                  />
                ) : (
                  <p>No photo available</p> // Заглушка, якщо немає фото
                )}
              </li>
            ))
          ) : (
            !loading && <p>No cast information available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MovieCast;

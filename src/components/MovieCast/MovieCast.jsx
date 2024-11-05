import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { getMoviesCredits } from "../../services/Api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
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

        // Перевірка, чи є в даних актори
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
        <ul>
          {casts.length > 0 ? (
            casts.map((cast) => (
              <li key={cast.id}>
                <h3>{cast.name}</h3>
                {cast.profile_path ? (
                  <img
                   src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={`${cast.name}`}
                  />
                ) : (
                  <p>No image available</p> // Заглушка, якщо немає фото
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

import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import Loading from "../components/Loader/Loader";
import { getMoviesTrends } from "../services/Api";

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function asyncWrapper() {
      try {
        setLoading(true);
        setError(null);
        const movies = await getMoviesTrends();
        setTrends(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    asyncWrapper();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {loading ? (
        <Loading />
      ) : (
        <div>
          <MovieList movies={trends} />
        </div>
      )}
    </div>
  );
}

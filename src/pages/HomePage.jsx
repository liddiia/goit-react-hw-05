import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import Loading from "../components/Loading/Loading";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton"; // Fixed typo in import
import { fetchTrends } from "../Api/Api";

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchTrends(page);

        setTrends(response.data); 
      } catch (error) {
        setError("Error loading movies: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    asyncWrapper();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h2>Home Page</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {loading ? (
        <Loading />
      ) : (
        <div>
          <MovieList movies={trends} />
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </div>
  );
}

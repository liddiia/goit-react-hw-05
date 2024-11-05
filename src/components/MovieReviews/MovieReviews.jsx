import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { getMoviesReviews } from "../../services/Api";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css"

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function asyncWrapper() {
      try {
        setLoading(true);
        setError(null);
        const data = await getMoviesReviews(movieId);

        // Припустимо, що дані приходять у вигляді об'єкта з ключем `results`
        if (data && Array.isArray(data.results)) {
          setReviews(data.results);
        } else {
          setReviews([]);
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
    <div className={css.reviewCont}>
      <h2 className={css.reviewTitle}>Movie Reviews</h2>
      <div >
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading && <Loading />}
        {reviews.length === 0 ? (
          <p>No reviews available.</p>
        ) : (
          <ul className={css.reviewList}>
            {reviews.map((review) => (
              <li key={review.id}>
                <p><strong>Author:</strong> {review.author}</p>
                <p className={css.reviewItem}>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieReviews;

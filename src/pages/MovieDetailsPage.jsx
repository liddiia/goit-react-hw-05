import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMoviesId from "../Api/Api"; // Ensure this import points to the correct file path

const MovieDetailsPage = () => {
  // const [favoriteFilm, setFavoriteFilm] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const { movieId } = useParams();

  // useEffect(() => {
  //   async function fetchMovieDetails() {
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       const data = await fetchMoviesId(movieId);
  //       setFavoriteFilm(data); // Assuming `data` contains the movie details directly
  //     } catch (error) {
  //       setError("Error loading movie: " + error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchMovieDetails();
  // }, [movieId]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;
  // if (!favoriteFilm) return <p>No movie details available</p>;

  return (
    <>
      <h2>Movie Details Page</h2>
      {/* <h3>{favoriteFilm.title}</h3>
      <p>{favoriteFilm.overview}</p> */}
      {/* Add more movie details here as needed */}
    </>
  );
};

export default MovieDetailsPage;


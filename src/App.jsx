import "./App.css";
import { Header } from "./components/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import { Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MovieCast from "./components/MovieCast/MovieCast";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
             <Route path="cast" element={<MovieCast />} />
             <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
       
      </Routes>
    </>
  );
};
export default App;

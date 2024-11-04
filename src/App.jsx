import './App.css'
import { Header } from './components/Header/Header';
import  MoviesPage  from './pages/MoviesPage';
import HomePage  from './pages/HomePage';
import  NotFoundPage  from './pages/NotFoundPage';

import { Routes, Route} from "react-router-dom";
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieReviews from './components/MovieReviews/MovieReviews';
import MovieCast from './components/MovieCast/MovieCast';
// import { Navigate } from "react-router-dom";


// const base_url = "https://api.themoviedb.org/3/movie/550?"
// const api_key = "37907d7207899a93e92a78599de60f63"

const App = () => {

  return (
    <>
    <Header /> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
        <Route path="*" element={<NotFoundPage/>} />
        {/* <Route path='*' element={<Navigate to={'/'}/>}/> */}
      </Routes>
    </>
  );
};
export default App;
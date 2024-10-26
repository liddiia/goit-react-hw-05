import './App.css'
import { Header } from './components/Header/Header';
import  MoviesPage  from './pages/MoviesPage';
import HomePage  from './pages/HomePage';
import  NotFoundPage  from './pages/NotFoundPage';

import { Routes, Route } from "react-router-dom";


 const App = () => {
  return (
    <>
    <Header /> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
};
export default App;
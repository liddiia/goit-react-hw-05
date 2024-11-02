import { Link } from "react-router-dom";
import css from "./MovieList.module.css"

const MovieList = ({movies}) => {
  return (
    <div className={css.movListCont}>
    
  <ul className={css.movList}>
       {movies.length!==0 && movies.map((movy)=>{return(

 <li key={movy.id} className={css.moviListItem}>
  <Link to={`/movies/${movy.id}`}> <p className={css.moviListTiyle}><b> {movy.title} </b></p> 
 <img className={css.moviListImg} src= {`https://image.tmdb.org/t/p/w500${movy.backdrop_path}`} alt="poster of film"/>
 </Link>   
 <p className={css.moviListDiscription}> {movy.overview} </p>
        </li>
     )})
       }
    </ul>  
     
    </div>
  )
}

export default MovieList;
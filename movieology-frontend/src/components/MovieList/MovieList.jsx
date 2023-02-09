import "./MovieList.scss";

import Movie from "../Movie/Movie";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/edit/${movie.id}`}>
            <Movie movie={movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default MovieList;

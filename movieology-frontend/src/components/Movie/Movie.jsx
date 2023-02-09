import "./Movie.scss";

const Movie = ({ movie }) => {
  const { title, movie: year, originGenre, rating } = movie;

  return (
    <div className="movie">
      <h3 className="movie__title">{title}</h3>
      <p className="movie__text">Year: {year}</p>
      <p className="movie__text">Genre: {originGenre}</p>
      <p className="movie__text">Rating: {rating}</p>
    </div>
  );
};

export default Movie;

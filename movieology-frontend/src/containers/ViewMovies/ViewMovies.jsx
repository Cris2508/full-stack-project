import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Select from "../../components/Select/Select";
import Spinner from "../../components/Spinner/Spinner";
import "./ViewMovies.scss";

const ViewMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const getMovies = async (originGenre) => {
    let url = "http://localhost:8080/movies";

    if (originGenre) {
      url += `?genreName=${originGenre}`;
    }

    const response = await fetch(url);
    const movieData = await response.json();
    setMovies(movieData);
  };

  const getOriginGenres = async () => {
    const response = await fetch("http://localhost:8080/movies/genres");
    const data = await response.json();
    setGenres(data);
  };

  useEffect(() => {
    getOriginGenres();
    getMovies(selectedGenre);
  }, [selectedGenre]);

  const handleSelectGenre = (event) => setSelectedGenre(event.target.value);

  const isLoading = !(movies.length > 0) && !(movies.length > 0);

  if (isLoading) return <Spinner />;

  return (
    <section className="view-movies">
      <h2 className="view-movies__title">List of Your Favorite Movies!</h2>
      <form className="view-movies__form">
        <Select
          options={genres}
          onChange={handleSelectGenre}
          label="genres"
          labelText="Select a Genre: "
        />
      </form>
      <MovieList movies={movies} />
    </section>
  );
};

export default ViewMovies;

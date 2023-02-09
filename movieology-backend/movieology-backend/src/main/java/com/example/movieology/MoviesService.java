package com.example.movieology;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MoviesService {
    @Autowired
    MoviesRepository moviesRepository;


    public void addMovie(Movie movie) {
        moviesRepository.save(movie);
    }


    public Movie getMovieById(long id) {
        Optional<Movie> movie = moviesRepository.findById(id);

        if (movie.isEmpty()) {
            throw new MovieNotFoundException();
        }

        return movie.get();
    }

    public Movie getRandomMovie() {
        return moviesRepository.getRandomMovie();
    }

    public List<Long> getMovieIds() {
        return moviesRepository.getDistinctIds();
    }

    public List<String> getOriginGenres() {
        return moviesRepository.getDistinctOriginGenres();
    }

    public List<Movie> getMoviesByOriginGenre(String genreName, int limit) {
        List<Movie> movies = moviesRepository.getAllByOriginGenreIgnoreCase(genreName);

        return movies
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }

    public List<Movie> getAllMovies(int limit) {
        return moviesRepository
                .findAll()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());

    }

    public void updateMovie(Movie newMovie, long id) {
        if (!moviesRepository.existsById(id)) {
            throw new MovieNotFoundException();
        }

        newMovie.setId(id);

        moviesRepository.save(newMovie);
    }

    // DELETE
    @Transactional
    public void deleteMovieById(long id) {
        if (!moviesRepository.existsById(id)) {
            throw new MovieNotFoundException();
        }

        moviesRepository.deleteMovieById(id);
    }
}

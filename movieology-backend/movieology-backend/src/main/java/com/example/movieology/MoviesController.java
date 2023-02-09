package com.example.movieology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
public class MoviesController {

    @Autowired
    private MoviesService moviesService;
    @Autowired
    private MoviesRepository moviesRepository;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(MovieNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }


    @PostMapping("/movie")
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
        moviesService.addMovie(movie);
        return ResponseEntity.status(HttpStatus.CREATED).body(movie);
    }


    @GetMapping("/movie")
    public ResponseEntity<String> movie() {
        return ResponseEntity.status(HttpStatus.OK).body("Hello world!");
    }

    @GetMapping("/movies")
    public ResponseEntity<List<Movie>> getMovies(@RequestParam(required = false) String genreName, @RequestParam(defaultValue = "100") int limit) {

        if (genreName != null) {
            return ResponseEntity.status(HttpStatus.OK).body(moviesService.getMoviesByOriginGenre(genreName, limit));
        }

        return ResponseEntity.status(HttpStatus.OK).body(moviesService.getAllMovies(limit));
    }

    @GetMapping("/movies/ids")
    public ResponseEntity<List<Long>> getMoviesIds() {
        return ResponseEntity.status(HttpStatus.OK).body(moviesService.getMovieIds());
    }

    @GetMapping("/movies/genres")
    public ResponseEntity<List<String>> getMoviesGenres() {
        return ResponseEntity.status(HttpStatus.OK).body(moviesService.getOriginGenres());
    }

    @GetMapping("/movie/random")
    public ResponseEntity<Movie> getRandomMovie() {
        return ResponseEntity.status(HttpStatus.OK).body(moviesService.getRandomMovie());
    }

    @GetMapping("/movie/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(moviesService.getMovieById(id));
    }


    @PutMapping("/movie/{id}")
    public ResponseEntity<Movie> updateMovie(@RequestBody Movie newMovie, @PathVariable long id) {
        newMovie.setId(id);
        moviesService.updateMovie(newMovie, id);
        return ResponseEntity.status(HttpStatus.OK).body(newMovie);
    }

    @DeleteMapping("/movie/{id}")
    public ResponseEntity<Void> deleteMovieById(@PathVariable long id) {
        moviesService.deleteMovieById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
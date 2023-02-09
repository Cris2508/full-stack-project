package com.example.movieology;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MoviesRepository extends JpaRepository<Movie, Long> {
    List<Movie> getAllByOriginGenreIgnoreCase(String originGenre);

    @Query(value="SELECT DISTINCT id FROM movie ", nativeQuery = true)
    List<Long> getDistinctIds();

    @Query(value="SELECT * FROM movie ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Movie getRandomMovie();

    @Query(value="SELECT DISTINCT origin_genre FROM movie ORDER BY origin_genre", nativeQuery = true)
    List<String> getDistinctOriginGenres();


    // DELETE
    void deleteMovieById(long id);
}

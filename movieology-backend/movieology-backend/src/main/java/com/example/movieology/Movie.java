package com.example.movieology;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String year;
    private String originGenre;
    private String rating;
    private LocalDate dateCreated = LocalDate.now();

    public Movie() {
    }

    public Movie(Long id, String title, String year, String originGenre, String rating, LocalDate dateCreated) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.originGenre= originGenre;
        this.rating = rating;
        this.dateCreated = dateCreated;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getOriginGenre() {
        return originGenre;
    }

    public void setOriginGenre(String originGenre) {
        this.originGenre = originGenre;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }
}

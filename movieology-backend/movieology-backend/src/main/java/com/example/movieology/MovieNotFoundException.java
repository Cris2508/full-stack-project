package com.example.movieology;

public class MovieNotFoundException  extends RuntimeException{
    public MovieNotFoundException() {
        super("Movie has not been found");
    }
}

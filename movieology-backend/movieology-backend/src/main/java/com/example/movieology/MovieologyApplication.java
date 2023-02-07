package com.example.movieology;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class MovieologyApplication {

	public static void main(String[] args) {

		SpringApplication.run(MovieologyApplication.class, args);
	}


}

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Movie from "../../components/Movie/Movie";
import Spinner from "../../components/Spinner/Spinner";
import "./EditMovie.scss";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getMovieById = async (id) => {
    const url = `http://localhost:8080/movie/${id}`;
    const response = await fetch(url);
    const movieData = await response.json();
    setMovie(movieData);
  };

  useEffect(() => {
    getMovieById(id);
  }, [id]);

  const handleUpdate = async (updatedMovie) => {
    const result = await fetch(`http://localhost:8080/movie/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    });

    if (result.ok) {
      alert("Movie updated");
      setMovie(updatedMovie);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDelete = async () => {
    const result = await fetch(`http://localhost:8080/movie/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Movie deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  if (!movie) return <Spinner />;

  return (
    <section class="edit-movie">
      <h2 class="edit-movie__title">Edit Movie</h2>
      <div class="edit-movie__content">
        <Movie movie={movie} />
        <div class="edit-movie__buttons">
          <button
            class={showForm ? "edit-movie__button" : "edit-movie__button"}
            onClick={handleShowForm}
          >
            Update
          </button>
          <button class="edit-movie__button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {showForm && (
        <Form
          defaultFormState={movie}
          formTitle="Update movie"
          handleSubmit={handleUpdate}
        />
      )}
    </section>
  );
};

export default EditMovie;

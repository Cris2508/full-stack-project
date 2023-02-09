import { useState } from "react";
import "./Form.scss";

const Form = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [movie, setMovie] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(movie).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(movie);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="Movie Title"
          value={movie.title}
          onInput={(event) => setMovie({ ...movie, title: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Year"
          value={movie.year}
          onInput={(event) => setMovie({ ...movie, year: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Genre"
          value={movie.originGenre}
          onInput={(event) =>
            setMovie({ ...movie, originGenre: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Rating"
          value={movie.rating}
          onInput={(event) =>
            setMovie({ ...movie, rating: event.target.value })
          }
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

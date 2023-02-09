import "./AddMovie.scss";
import Form from "../../components/Form/Form";

const AddMovie = () => {
  const handleSubmit = async (movie) => {
    const result = await fetch("http://localhost:8080/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    if (result.ok) {
      alert("Movie added");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = { title: "", year: "", originGenre: "", rating: "" };

  return (
    <section className="create-movie">
      <h2 className="create-movie__title">Create a Movie</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add A New Movie"
      />
    </section>
  );
};

export default AddMovie;

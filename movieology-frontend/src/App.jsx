import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import ViewMovies from "./containers/ViewMovies/ViewMovies";
import AddMovie from "./containers/AddMovie/AddMovie";
import EditMovie from "./containers/EditMovie/EditMovie";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="layout">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<ViewMovies />} />
          <Route path="/movie/create" element={<AddMovie />} />
          <Route path="/movie/edit/:id" element={<EditMovie />} />
        </Routes>
      </Router>
      <img
        className="movie"
        src="images/popcorn-movie.jpg"
        alt="Movie and popcorn"
      />
    </div>
  );
};

export default App;

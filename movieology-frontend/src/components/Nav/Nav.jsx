import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/movies">
        Movies
      </Link>

      <Link className="nav__item" to="/movie/create">
        Add Movie
      </Link>
    </div>
  );
};

export default Nav;

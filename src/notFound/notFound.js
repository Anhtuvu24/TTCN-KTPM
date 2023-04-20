import { Link } from "react-router-dom";
import "./index.scss";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <img
        className="notFound-img"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
      />
      <div className="notFound-content">
        <h2>Looks like you're lost 😕</h2>
        <p>The page you are looking for is not available!</p>
        <button className="notFound-btn">
          <Link to="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
}

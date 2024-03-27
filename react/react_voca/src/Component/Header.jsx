import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <h1>
        <Link to="/">
          <p>토익 영단어(고급)</p>
        </Link>
      </h1>
    </div>
  );
}

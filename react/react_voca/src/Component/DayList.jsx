import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch('http://localhost:5174/days');

  return (
    <ul className="list_day">
      {days.map((day) => {
        return (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}> Day {day.day} </Link>
          </li>
        );
      })}
    </ul>
  );
}

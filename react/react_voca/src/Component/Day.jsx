import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {
  const a = useParams(); //url로 들어오는 파라미터 값(day)
  const wordList = dummy.words.filter((word) => {
    return word.day === +a.day;
  });

  return (
    <>
      <h2>Day {a.day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

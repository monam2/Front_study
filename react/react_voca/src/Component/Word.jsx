import { useState } from "react";

export default function Word({word:w}) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const ToggleShow = ()=>{
        setIsShow(!isShow);
    }

    const ToggleDone = ()=>{
        setIsDone(!isDone);
        fetch(`http://localhost:5174/words/${word.id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            })
        })
        .then(res=>{
            if (res.ok) {
                setIsDone(!isDone)
            }
        })
    };

    if (word.id === 0) {
        return null;
    }

    function del() {
    if(window.confirm('삭제하시겠습니까?')) {
        fetch(`http://localhost:5174/words/${word.id}`, {
            method : "Delete",
        }).then(res=>{
            if(res.ok) {
                setWord({id:0});
            }
        })
    }
    }

    return (
        <tr className={isDone ? "off" : ""}>
              <td><input type="checkbox" onChange={ToggleDone} checked={isDone}/></td>
              <td>{word.eng}</td>
              <td>{isShow && word.kor}</td>
              <td>
                <button onClick={ToggleShow}>
                    뜻 {isShow ? "숨기기" : "보기"}
                </button>
                <button className="btn_del" onClick={del}>삭제</button>
              </td>
            </tr>
    );
}
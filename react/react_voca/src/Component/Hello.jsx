import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {

    const [name, setName] = useState("mike");
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    return (
        <div>
            <h1>{name} {age} : {msg}</h1>
            <UserName name={name}></UserName>
            <button onClick={()=>{
                setName(name==="mike" ? "jane" : "mike");
            }}>버튼</button>

        </div>

    );
}


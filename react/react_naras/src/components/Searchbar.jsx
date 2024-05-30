import React, { useState } from 'react'
import style from "./Searchbar.module.css"
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const router = useNavigate();
    const [search, setSearch] = useState("");

    const onChangeSearch = (e)=> {
        setSearch(e.target.value);
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onClickSearch();
        }
    }

    const onClickSearch = ()=> {
        if (search !== "") {
            router(`/search?q=${search}`)
        }
    }

  return (
    <div className={style.container}>
        <input value={search} onKeyDown={onKeyDown} onChange={onChangeSearch} type="text" placeholder="검색어를 입력하세요."/>
        <button onClick={onClickSearch}>검색</button>
    </div>
  )
}

export default Searchbar
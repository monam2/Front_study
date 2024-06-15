import React, { useEffect, useState } from "react";
import style from "./Searchbar.module.css";
import { useRouter } from "next/router";

const Searchbar = ({ q }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(q);
  }, [q]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (search !== "") {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요."
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
};

export default Searchbar;

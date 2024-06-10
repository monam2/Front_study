import React, { useState } from "react";
import styles from "./CommonSearchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchState } from "@/store/atoms/searchState";
import { pageState } from "@/store/atoms/pageState";

const CommonSearchBar = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [page, setPage] = useRecoilState(pageState);
  const [text, setText] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (text === "") {
        setSearch("Korea");
      } else {
        setSearch(text);
      }
    }
  };

  const onSearch = () => {
    if (text === "") {
      setSearch("Korea");
    } else {
      setSearch(text);
    }
    setPage(1);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색하세요."
          className={styles.searchBar__search__input}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  );
};

export default CommonSearchBar;

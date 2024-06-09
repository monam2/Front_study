import React, { useState } from "react";
import styles from "./CommonSearchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchState } from "@/store/atoms/searchState";

const CommonSearchBar = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [text, setText] = useState("");
  const onChange = (event: React.KeyboardEvent) => {
    setText(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (!text === "") {
        setSearch("Korea");
      } else {
        setSearch(text);
      }
    }
  };

  const onSearch = () => {
    if (!text === "") {
      setSearch("Korea");
    } else {
      setSearch(text);
    }
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

import React from "react";
import CountryItem from "./CountryItem";
import style from "./CountryList.module.css"

const CountryList = ({ countries }) => {
  return (
    <div className={style.container}>
      {countries.map((country) => {
        return <CountryItem key={country.code} country={country} />;
      })}
    </div>
  );
};

export default CountryList;

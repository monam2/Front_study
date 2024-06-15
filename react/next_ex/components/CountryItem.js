import React from "react";
import style from "./CountryItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const CountryItem = ({ country }) => {
  const router = useRouter();

  const onClickItem = () => {
    router.push(`/country/${country.code}`);
  };

  return (
    <div className={style.container} onClick={onClickItem}>
      <div className={style.flag_img}><Image src={country.flagImg} fill /></div>
      
      <div className={style.content}>
        <div className={style.name}>
          {country.flagEmoji} {country.commonName}
        </div>
        <div>지역 : {country.region}</div>
        <div>수도 : {country.capital.join(", ")}</div>
        <div>인구 : {country.population}</div>
      </div>
    </div>
  );
};

export default CountryItem;

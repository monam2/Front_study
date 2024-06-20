import style from "./CountryItem.module.css";
import { useNavigate } from "react-router-dom";

const CountryItem = ({ country }) => {

    const router = useNavigate();

    const onClickItem =() =>{
        router(`/country/${country.code}`)
    }

  return (
    <div className={style.container} onClick={onClickItem}>
      <img className={style.flag_img} src={country.flagImg} alt="" />
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

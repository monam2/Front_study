import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { fetchCountries } from "../api";
import CountryList from "../components/CountryList";
import Searchbar from "../components/Searchbar";
import style from './Home.module.css'

const Home = () => {
  const [countries, setContries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();
    setContries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <div className={style.container}>
      <Searchbar />
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;

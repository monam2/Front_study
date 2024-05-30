import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { useParams } from "react-router-dom";
import { fetchCountry } from "../api";

const Country = () => {
  const params = useParams();

  const [country, setCountry] = useState(null);

  const setInitData = async () => {
    const data = await fetchCountry(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  return <div>Country : {country?.commonName}</div>;
};

export default Country;

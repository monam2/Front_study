import { fetchSearchResult } from "@/api";
import Searchbar from "@/components/Searchbar";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CountryList from "./../../components/CountryList";
import { Head } from "next/head";

const Search = () => {
  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState([]);

  const setData = async () => {
    const data = await fetchSearchResult(q);
    setCountries(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>NARAS 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta property="og:description" content="전 세계 국가들의 정보를 확인해보세요." />
      </Head>
      <Searchbar q={q} />
      <CountryList countries={countries} />
    </>
  );
};

Search.Layout = SubLayout;

export default Search;

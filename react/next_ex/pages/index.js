import { fetchCountries } from "@/api";
import Searchbar from "./../components/Searchbar";
import CountryList from "./../components/CountryList";
import Head from "next/head";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>Naras</title>
        <meta property="og:image"  content="/thumbnail.png"/>
        <meta property="og:title" content="NARAS"/>
        <meta property="og:description" content="전 세계 국가들의 정보를 확인해보세요."/>
      </Head>
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

// export const getServerSideProps = async () => {
//   const countries = await fetchCountries();

//   return {
//     props: {
//       countries
//     },
//   };
// };

export const getStaticProps = async () => {
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};

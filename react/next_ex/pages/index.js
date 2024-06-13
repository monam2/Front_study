import { fetchCountries } from "@/api";

export default function ({ countries }) {
  return <>{countries.map((country)=>{
    return <div key={country.code}>{country.commonName}</div>
  })}</>;
};

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
      countries
    },
  };
};


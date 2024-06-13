import { fetchSearchResult } from "@/api";
import SubLayout from "@/components/SubLayout";

const Search = ({countries}) => {
  return (
    <div>
      {countries.map((country) => <div key={country.code}>{country.commonName}</div>)}
    </div>
  );
};

Search.Layout = SubLayout;

export default Search;

export const getServerSideProps = async (context) => {
  const { q } = context.query;
  let countries = [];
  if (q) {
    countries = await fetchSearchResult(q);
  }

  return {
    props: {
      countries,
    },
  };
};

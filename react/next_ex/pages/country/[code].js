import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

const Country = ({ country }) => {
  const router = useRouter();
  const { code } = router.query;

  return <div>{country.commonName}</div>;
};

Country.Layout = SubLayout;

export default Country;

export const getStaticPaths = async () => {
  return {
    paths : [
      {params : {code : 'ABW'}},
      {params : {code : 'KOR'}},
    ],
    fallback : false,
  }
};

export const getStaticProps = async (context) => {
  const { code } = context.params;

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: {
      country,
    },
  };
};

import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const EmptyLayout = ({ children }) => <>{children}</>;
  const SubLayout = Component.Layout || EmptyLayout;

  return (
    <div>
      <Layout>
        <SubLayout>
          <Component {...pageProps} />
        </SubLayout>
      </Layout>
    </div>
  );
}

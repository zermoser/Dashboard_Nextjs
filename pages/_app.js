import "../styles/globals.css";
import useLayout from "../utils/useLayout";
import LoaderPage from "../components/LoaderPage";

function MyApp({ Component, pageProps }) {
  const Layout = useLayout();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  // return <Component {...pageProps} />;
}

export default MyApp;

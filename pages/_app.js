import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => (
  <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
);

export default App;

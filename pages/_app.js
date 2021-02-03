import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;

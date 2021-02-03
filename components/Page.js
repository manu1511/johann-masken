import Head from "next/head";
import Layout from "./Layout";

const Page = ({ children, meta }) => (
  <Layout image={meta.image}>
    <Head>
      <title>{meta.title} | JOHANN MASKEN</title>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
    </Head>
    {children}
  </Layout>
);

export default Page;

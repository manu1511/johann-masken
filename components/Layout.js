import tw, { css } from "twin.macro";
import Logo from "../components/Logo";
import Head from "next/head";

const gradient = css`
  --tw-gradient-from: white 25%;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 255, 255, 0));
`;

const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Serif:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <header>
      <div tw="relative">
        <img src="/images/rauhnacht-bayern-03.jpg" tw="opacity-25" />
        <div
          tw="w-full h-full absolute top-0 left-0 bg-gradient-to-t"
          css={gradient}
        />
      </div>

      <Logo />
    </header>

    <main>{children}</main>

    <footer></footer>
  </>
);

export default Layout;

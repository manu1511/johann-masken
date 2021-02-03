import Head from "next/head";
import Image from "next/image";
import tw, { css } from "twin.macro";
import Logo from "./Logo";
import Menu from "./Menu";

const gradient = css`
  --tw-gradient-from: white 25%;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 255, 255, 0));
`;

const Layout = ({ children, image }) => (
  <>
    <Head>
      <link rel="favicon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Serif:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div tw="font-serif">
      <header>
        <div tw="relative">
          <Image
            src={image}
            alt="Rauhnacht Bayern"
            tw="opacity-25"
            width="1644"
            height="1200"
            layout="responsive"
            priority="true"
          />
          <div
            tw="w-full h-full absolute top-0 left-0 bg-gradient-to-t"
            css={gradient}
          />
        </div>

        <Logo />
      </header>

      <nav>
        <Menu />
      </nav>

      <main tw="p-8">{children}</main>

      <footer></footer>
    </div>
  </>
);

Layout.defaultProps = {
  image: "/images/rauhnacht-bayern-03.jpg",
};

export default Layout;

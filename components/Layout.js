import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import tw, { css } from "twin.macro";
import Logo from "./Logo";
import Menu from "./Menu";
import Footer from "./Footer";

const gradient = css`
  --tw-gradient-from: white 25%;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 255, 255, 0));
`;

const components = {
  h1: (props) => (
    <h1
      tw="text-3xl sm:text-5xl text-center font-bold leading-none mb-4 sm:mb-12"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 tw="text-2xl sm:text-3xl font-bold leading-none mb-4" {...props} />
  ),
  p: (props) => <p tw="sm:text-xl mb-4" {...props}></p>,
  ul: (props) => (
    <ul tw="sm:text-xl list-inside divide-y divide-gray-200 mb-4" {...props} />
  ),
  li: (props) => <li tw="py-2" {...props} />,
  img: (props) =>
    props.title ? (
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption tw="font-sans text-sm sm:text-base text-gray-400 mt-2 mb-4">
          {props.title}
        </figcaption>
      </figure>
    ) : (
      <img tw="mb-4" {...props} />
    ),
  a: (props) => (
    <Link href={props.href} passHref>
      <a tw="border-b border-black hocus:border-none" {...props}></a>
    </Link>
  ),
};

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
    <div tw="font-serif max-w-3xl m-auto">
      <header tw="sm:mt-32">
        <div tw="relative -mb-32 sm:hidden sm:m-0">
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

      <main tw="p-4">
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>

      <Footer />
    </div>
  </>
);

Layout.defaultProps = {
  image: "/images/rauhnacht-bayern-03.jpg",
};

export default Layout;

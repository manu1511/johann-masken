import tw from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ children, name, href, title, desc }) => {
  const router = useRouter();
  const currentPage = router.pathname.replaceAll("/", "") || "index";
  const activePage = href.replaceAll("/", "") || "index";

  return (
    <li css={[activePage === currentPage && tw`font-bold`]}>
      <Link href={href} passHref>
        <a title={title} tw="block py-2 hocus:text-gray-500">
          {name}
          {desc && <div tw="text-sm text-gray-500 font-normal">{desc}</div>}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;

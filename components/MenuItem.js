import tw from "twin.macro";
import Link from "next/link";

const MenuItem = ({ children, name, href, title, desc }) => (
  <li tw="">
    <Link href={href} passHref>
      <a title={title} tw="block py-2">
        {name}
        {desc && <div tw="text-sm text-gray-500">{desc}</div>}
      </a>
    </Link>
  </li>
);

export default MenuItem;

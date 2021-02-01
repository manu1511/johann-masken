import tw from "twin.macro";

const MenuItem = ({ children, name, href, title, desc }) => (
  <li tw="">
    <a href={href} title={title} tw="block py-2">
      {name}
      {desc && <div tw="text-sm text-gray-500">{desc}</div>}
    </a>
  </li>
);

export default MenuItem;

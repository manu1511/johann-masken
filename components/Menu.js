import tw from "twin.macro";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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

const Menu = () => {
  let [isOpen, setOpen] = useState(false);

  return (
    <div tw="my-8 mx-4 border-t">
      <div tw="flex justify-center -mb-14">
        <div tw="p-1 border rounded-full bg-white transform -translate-y-1/2">
          <Hamburger size="24" label="Menü" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {isOpen && (
        <ul tw="divide-y divide-gray-200 border-b mb-8">
          <MenuItem name="Startseite" href="/" />
          <MenuItem name="Bilder" href="/bilder/" />
          <MenuItem
            name="Maskenreparatur & Umbau"
            href="/maskenreparatur-umbau/"
          />
          <MenuItem
            name="Maskenschnitzen (Anleitung)"
            href="/maskenschnitzen/"
            desc="In 10 Schritten zur Johann Maske"
          />
          <MenuItem name="Kontakt" href="/kontakt/" />
        </ul>
      )}
    </div>
  );
};

export default Menu;

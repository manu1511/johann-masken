import tw from "twin.macro";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import MenuItem from "./MenuItem";

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
          <MenuItem name="Home" href="/" />
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

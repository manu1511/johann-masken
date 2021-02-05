import tw from "twin.macro";
import { HiChevronUp } from "react-icons/hi";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Social = ({ href, title, children }) => (
  <a href={href} title={title} target="_blank" tw="p-2">
    {children}
  </a>
);

const Footer = () => (
  <div tw="my-8 mx-4 border-t">
    <div tw="flex justify-center -mb-8">
      <div tw="border rounded-full bg-white transform -translate-y-1/2">
        <a href="#top" title="Nach oben" tw="block p-3">
          <HiChevronUp tw="h-8 w-8" />
        </a>
      </div>
    </div>

    <div tw="flex flex-row flex-wrap text-center">
      <p tw="w-full mb-4 pt-4">
        <strong>
          <a href="https://johann-masken.at" title="Johann Masken" tw="text-xl">
            Johann Masken
          </a>
        </strong>
        <br />
        Brunnfeldweg 12
        <br />
        6433 Oetz
      </p>

      <div tw="flex flex-row m-auto mb-4">
        <Social href="https://facebook.com/johannmasken" title="Facebook">
          <FaFacebookSquare tw="w-8 h-8" />
        </Social>

        <Social href="https://instagram.com/johannmasken" title="Instagram">
          <FaInstagram tw="w-8 h-8" />
        </Social>

        <Social href="https://wa.me/+436766989702" title="Whatsapp">
          <FaWhatsapp tw="w-8 h-8" />
        </Social>

        <Social
          href="https://www.youtube.com/channel/UCbaU4E8K6GWTWXPzibOg4pw"
          title="Youtube"
        >
          <IoLogoYoutube tw="w-8 h-8" />
        </Social>
      </div>

      <p tw="w-full mb-4">
        <a
          href="mailto:office@johann-masken.at"
          title="Email"
          tw="mb-2 border-gray-300 border-b inline-block hocus:border-white"
        >
          office@johann-masken.at
        </a>
        <br />
        Tel. &nbsp;
        <a
          href="tel:+436766989702"
          title="Handynummer"
          tw="border-gray-300 border-b inline-block hocus:border-white"
        >
          +43 676 6989 702
        </a>
      </p>
    </div>
  </div>
);

export default Footer;

import Image from "next/image";
import tw from "twin.macro";

const Figure = ({ desc, children, ...attrs }) => (
  <figure>
    <div tw="relative bg-gray-200 mb-4!">
      <img
        src="/o.svg"
        tw="absolute top-1/2 left-1/2 w-1/5 h-auto transform -translate-x-1/2 -translate-y-1/2"
      />

      <Image {...attrs} layout="responsive" />
    </div>

    {(desc || children) && (
      <figcaption tw="font-sans text-sm sm:text-base text-gray-400 -mt-2 mb-4">
        {desc || children}
      </figcaption>
    )}
  </figure>
);

export default Figure;

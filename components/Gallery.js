import Image from "next/image";
import tw from "twin.macro";

const Gallery = ({ images }) =>
  images.map(({ src, width, height }) => (
    <div tw="mb-4 bg-gray-200 relative">
      <img
        src="/o.svg"
        tw="absolute top-1/2 left-1/2 w-1/5 h-auto transform -translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src={`/photos/${src}`}
        width={width.toString()}
        height={height.toString()}
        key={src}
        layout="responsive"
      />
    </div>
  ));

export default Gallery;

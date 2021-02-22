import tw from "twin.macro";

const Lead = ({ children }) => (
  <p tw="text-center text-gray-400 sm:text-xl -mt-3 mb-4 sm:-mt-11 sm:mb-12 leading-none">
    {children}
  </p>
);

export default Lead;

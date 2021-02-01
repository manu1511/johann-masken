import React from "react";
import { GlobalStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * { 
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export default function GlobalStylesComponent() {
  return (
    <>
      <GlobalStyles />
      <GlobalStyled />
    </>
  );
}

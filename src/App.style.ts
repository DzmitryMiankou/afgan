import styled, { css } from "styled-components";
import myBackgroundImage from "./img/Mountains_surrounding_Bagram_Air_Field.png";

export const Wrapper = css`
  max-width: var(--Size-Wrapper-Max);
  min-width: var(--Size-Wrapper-Min);
  margin: auto;
`;

const PagekWidth = styled.div`
  display: block;
  height: 100vh;
  background-image: url(${myBackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0% 100%;
`;

export const St = { PagekWidth };

import styled, { css } from "styled-components";
import { Wrapper } from "../../../App.style";

export const Coursor = css`
  cursor: pointer;
  transition: ease-in-out 0.2s;
`;

const Container = styled.div<{
  $hightHeader: number;
}>`
  ${Wrapper};
  height: calc(100% - ${(props) => props.$hightHeader}px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Img = styled.svg`
  width: 100%;
  height: auto;
  max-height: 85vh;
  display: block;
  margin-top: auto;
`;

const TextSvg = styled.text`
  font-family: "Golos Text", sans-serif;
  font-optical-sizing: auto;
  font-size: 50px;
  font-weight: 500;
  fill: #664116;
`;

const arr: Array<number> = [0.2724, -0.01787451, 0.01787451, 0.2724].map(
  (num) => (num === 0.2724 ? num + 0.006 : num),
);

const EmailImage = styled.image`
  ${Coursor};
  transform: matrix(0.2724, -0.01787451, 0.01787451, 0.2724, 570, 450);
  &:hover {
    filter: drop-shadow(0px 10px 20px rgba(75, 83, 32, 0.4));
    transform: matrix(${arr.join(", ")}, 570, 450);
  }
`;

const PImage = styled.g`
  ${Coursor};
  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
  }
`;

const WarText = styled.tspan`
  cursor: pointer;
  fill: #a53002;
  transition: 0.2s;
  &:hover {
    fill: #ff5c1b;
  }
`;

const TextTimline = styled.g`
  transition: 0.2s;
  &:hover {
    fill: #b84400;
  }
`;

const PTimline = styled.rect`
  transition: 0.2s;
  &:hover {
    fill: #2fff00;
  }
`;

export const St = {
  PImage,
  EmailImage,
  Container,
  Img,
  TextSvg,
  WarText,
  TextTimline,
  PTimline,
};

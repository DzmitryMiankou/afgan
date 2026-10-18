import styled, { css } from "styled-components";
import { Wrapper } from "../../../App.style";

interface ContainerProps {
  $hightHeader: number;
}

export const Coursor = css`
  cursor: pointer;
  transition: ease-in-out 0.2s;
`;

const Container = styled.div<ContainerProps>`
  ${Wrapper};
  max-height: calc(100% - ${(props) => props.$hightHeader}px);
  height: 100%;
  display: grid;
  align-items: flex-end;
`;

const Img = styled.svg`
  width: 100%;
`;

const TextSvg = styled.text`
  font-size: 80px;
  font-weight: 700;
  fill: #483e21;
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

export const St = { PImage, EmailImage, Container, Img, TextSvg };

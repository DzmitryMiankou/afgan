import styled from "styled-components";
import { Wrapper } from "../../../App.style";

interface ContainerProps {
  $hightHeader: number;
}

const Container = styled.div<ContainerProps>`
  ${Wrapper};
  max-height: calc(100% - ${(props) => props.$hightHeader}px);
  height: 100%;
  display: grid;
  align-items: flex-end;
`;

const Img = styled.svg`
  height: 98%;
  width: 100%;
`;

const TextSvg = styled.text`
  font-size: 80px;
  font-weight: 700;
  fill: #483e21;
`;

const MapImage = styled.path`
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    transform: translateY(-4px);
    filter: drop-shadow(0px 10px 20px rgba(75, 83, 32, 0.4));
  }
`;
const PImage = styled.g`
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
  }
`;

export const St = { PImage, MapImage, Container, Img, TextSvg };

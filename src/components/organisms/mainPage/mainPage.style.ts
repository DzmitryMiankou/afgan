import styled from "styled-components";
import { Wrapper } from "../../../App.style";

interface ContainerProps {
  $hightHeader: number;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  ${Wrapper};
  align-items: flex-end;
  max-height: calc(100% - ${(props) => props.$hightHeader}px);
  height: 100%;
`;

const Img = styled.img`
  user-select: none;
  pointer-events: none;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const St = { Container, Img };

import styled from "styled-components";

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
  TextTimline,
  PTimline,
};

import styled from "styled-components";

const Text = styled.p`
  text-indent: 30px;
  text-align: justify;
`;
const TextBlock = styled.div`
  font-size: 18px;
`;

const Img = styled.img<{ $sizeMax?: number }>`
  max-width: ${(props) => props.$sizeMax ?? 600}px;
  width: 100%;
  height: auto;
`;

const Figu = styled.figure`
  margin: 30px 0;
`;

const Figurca = styled.figcaption`
  font-style: italic;
  font-size: 14px;
`;

export const St = { Text, TextBlock, Img, Figu, Figurca };

import styled, { css } from "styled-components";

export const Wrapper = css`
  max-width: var(--Size-Wrapper-Max);
  min-width: var(--Size-Wrapper-Min);
  margin: auto;
`;

const PagekWidth = styled.div`
  display: block;
  height: 100vh;
`;

export const St = { PagekWidth };

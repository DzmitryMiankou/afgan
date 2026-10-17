import styled from "styled-components";

const Nav = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

  & > *:first-child {
    justify-self: start;
  }
  & > *:last-child {
    justify-self: end;
  }
`;

const LogoText = styled.p`
  font-family: "Caveat", cursive;
  font-size: 30px;
  font-style: normal;
  text-align: center;
  color: #5f4100;
`;

export const St = { Nav, LogoText };

import styled from "styled-components";

const Nav = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: 5fr 1.5fr 0.5fr;
  justify-content: center;
  & > *:first-child {
    justify-self: start;
  }
  & > *:nth-child(2) {
    justify-self: end;
  }
  & > *:last-child {
    justify-self: end;
  }
`;

const LogoText = styled.p`
  font-size: 20px;
  font-style: normal;
  text-align: center;
  color: #5f4100;
  white-space: nowrap;
  font-weight: 600;
`;

export const St = { Nav, LogoText };

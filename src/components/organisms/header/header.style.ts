import styled from "styled-components";
import { Wrapper } from "../../../App.style";

const Header = styled.header`
  padding: 5px 0px;
  ${Wrapper};
`;

const ColorHed = styled.header`
  background-color: var(--BG-Header);
`;

export const St = { Header, ColorHed };

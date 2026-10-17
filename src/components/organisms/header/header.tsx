import { St } from "./header.style";
import Nav from "../../molecules/nav/nav";
import { forwardRef } from "react";

interface HeaderProps {}

const Header = forwardRef<HTMLElement, HeaderProps>((_, ref) => {
  return (
    <St.ColorHed>
      <St.Header ref={ref}>
        <Nav />
      </St.Header>
    </St.ColorHed>
  );
});

export default Header;

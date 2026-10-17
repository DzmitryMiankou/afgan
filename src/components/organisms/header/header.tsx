import { St } from "./header.style";
import Nav from "../../molecules/nav/nav";
import { HeaderProps } from "../../../App";

const Header: React.FC<HeaderProps> = ({ ref }) => {
  return (
    <St.ColorHed>
      <St.Header ref={ref}>
        <Nav />
      </St.Header>
    </St.ColorHed>
  );
};

export default Header;

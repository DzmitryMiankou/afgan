import { St } from "./header.style";
import Nav from "../../molecules/nav/nav";

type HeaderProps = { ref: React.RefObject<HTMLElement | null> };

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

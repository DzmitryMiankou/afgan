import { St } from "./header.style";
import Nav from "../../molecules/nav/nav";

type HeaderProps = {
  ref: React.RefObject<HTMLElement | null>;
  name: Array<string>;
};

const Header: React.FC<HeaderProps> = ({ ref, name }) => {
  return (
    <St.ColorHed>
      <St.Header ref={ref}>
        <Nav name={name} />
      </St.Header>
    </St.ColorHed>
  );
};

export default Header;

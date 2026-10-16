import { St } from "./header.style";
import Nav from "../../molecules/nav/nav";

const Header: React.FC = () => {
  return (
    <St.ColorHed>
      <St.Header>
        <Nav />
      </St.Header>
    </St.ColorHed>
  );
};

export default Header;

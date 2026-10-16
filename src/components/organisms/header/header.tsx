import { St } from "./header.style";
import Nav from "../../molecules/nav/nav";

const Header: React.FC = () => {
  return (
    <St.Header>
      <Nav />
    </St.Header>
  );
};

export default Header;

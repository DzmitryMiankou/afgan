import { St } from "./header.style";
import { TitleTs } from "../../../App";
import Nav from "../../molecules/nav/nav";

const Header: React.FC<{ biography: TitleTs }> = ({
  biography: { firstName, mainText, lastName, patronymic },
}) => {
  return (
    <St.Header>
      <Nav />
    </St.Header>
  );
};

export default Header;
/* <St.Title>{`${firstName} ${patronymic} ${lastName}`}</St.Title>
      <St.Text>{mainText}</St.Text>*/

import { St } from "./header.style";
import { TitleTs } from "../../../App";

const Header: React.FC<{ biography: TitleTs }> = ({
  biography: { firstName, mainText, lastName, patronymic },
}) => {
  return (
    <St.Header>
      <St.Title>{`${firstName} ${patronymic} ${lastName}`}</St.Title>
      <St.Text>{mainText}</St.Text>
    </St.Header>
  );
};

export default Header;

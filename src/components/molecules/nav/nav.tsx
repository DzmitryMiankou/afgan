import { St } from "./nav.style";
import LogoSchool from "../../atoms/LogoSchool/logoSchool";
import Button, { dataButtonType } from "../../atoms/button/button";
import InfoIcon from "@mui/icons-material/Info";

const dataButton: dataButtonType = {
  titleButton: "Информация о проекте",
  arialButton: "info",
  icon: <InfoIcon />,
};

const Nav: React.FC = () => {
  return (
    <St.Nav>
      <LogoSchool />
      <Button dataButton={dataButton} />
    </St.Nav>
  );
};

export default Nav;

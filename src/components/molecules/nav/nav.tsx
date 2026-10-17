import { St } from "./nav.style";
import LogoSchool from "../../atoms/LogoSchool/logoSchool";
import Button, { dataButtonType } from "../../atoms/button/button";
import InfoIcon from "@mui/icons-material/Info";

const dataButton: dataButtonType = {
  titleButton: "Информация о проекте",
  arialButton: "info",
  icon: <InfoIcon fontSize="large" />,
};

const Nav: React.FC = () => {
  return (
    <St.Nav>
      <LogoSchool />
      <St.LogoText>Памяти Дмитрия Карповича</St.LogoText>
      <Button dataButton={dataButton} />
    </St.Nav>
  );
};

export default Nav;

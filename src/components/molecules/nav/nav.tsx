import { St } from "./nav.style";
import LogoSchool from "../../atoms/LogoSchool/logoSchool";
import Button, { dataButtonType } from "../../atoms/button/button";
import InfoIcon from "@mui/icons-material/Info";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";

const dataButton: dataButtonType = {
  titleButton: "Информация о проекте",
  arialButton: "info",
  icon: <InfoIcon fontSize="large" />,
};

const Nav: React.FC = () => {
  return (
    <St.Nav>
      <LogoSchool />
      <Tooltip title="Увековечение памяти">
        <Link component="button" underline="hover" color="#a4783e">
          <St.LogoText>Памяти Дмитрия Карповича</St.LogoText>
        </Link>
      </Tooltip>
      <Button dataButton={dataButton} />
    </St.Nav>
  );
};

export default Nav;

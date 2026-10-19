import { St } from "./nav.style";
import LogoSchool from "../../atoms/LogoSchool/logoSchool";
import Button, { dataButtonType } from "../../atoms/button/button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";

const dataButton: dataButtonType = {
  titleButton: "Информация о проекте",
  arialButton: "info",
  icon: <InfoOutlinedIcon fontSize="large" />,
};

const Nav: React.FC<{ name: Array<string> }> = (name) => {
  const { title, text }: { title: string; text: string } = {
    title: "Увековечение памяти",
    text: `Памяти ${name.name[1].slice(0, -1)}я  ${name.name[0]}а`,
  };

  return (
    <St.Nav>
      <LogoSchool />
      <Tooltip title={title}>
        <Link component="button" underline="hover" color="#a4783e">
          <St.LogoText>{text}</St.LogoText>
        </Link>
      </Tooltip>
      <Button dataButton={dataButton} />
    </St.Nav>
  );
};

export default Nav;

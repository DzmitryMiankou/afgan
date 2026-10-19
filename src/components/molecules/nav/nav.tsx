import { St } from "./nav.style";
import LogoSchool from "../../atoms/LogoSchool/logoSchool";
import Button, { dataButtonType } from "../../atoms/button/button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setOpenReducer } from "../../../redux/openInfoReducer/openInfoReducer";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

const dataButton: dataButtonType = {
  titleButton: "Информация о проекте",
  arialButton: "info",
  icon: <InfoOutlinedIcon fontSize="large" />,
  infoType: "info",
};

const istData: dataButtonType = {
  titleButton: "Источники",
  arialButton: "history",
  icon: <AutoStoriesOutlinedIcon fontSize="large" />,
  infoType: "history",
};

const Nav: React.FC<{ name: Array<string> }> = (name) => {
  const dispatchStore = useDispatch<AppDispatch>();
  const { title, text }: { title: string; text: string } = {
    title: "Увековечение памяти",
    text: `Памяти ${name.name[1].slice(0, -1)}я  ${name.name[0]}а`,
  };

  return (
    <St.Nav>
      <LogoSchool />
      <Tooltip title={title}>
        <Link
          onClick={() => dispatchStore(setOpenReducer(true, "memory"))}
          component="button"
          underline="hover"
          color="#a4783e"
        >
          <St.LogoText>{text}</St.LogoText>
        </Link>
      </Tooltip>
      <div style={{ display: "flex", gap: "5px", marginLeft: "5px" }}>
        <Button dataButton={istData} />
        <Button dataButton={dataButton} />
      </div>
    </St.Nav>
  );
};

export default Nav;

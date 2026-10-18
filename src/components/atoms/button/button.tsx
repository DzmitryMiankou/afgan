import React from "react";
import { St } from "./button.styled";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { setOpenReducer } from "../../../redux/openInfoReducer/openInfoReducer";

type ButtonComponentType = React.FC<{ dataButton: dataButtonType }>;
type MyKeys = "titleButton" | "arialButton";
type WhileString<S = string> = { [K in MyKeys]: S };
export type dataButtonType = WhileString & { icon: React.ReactElement };

const Button: ButtonComponentType = ({
  dataButton: { arialButton, titleButton, icon },
}) => {
  const openStore = useSelector((state: RootState) => state.openInfo.data);
  const dispatchStore = useDispatch<AppDispatch>();

  return (
    <St.Button onClick={() => dispatchStore(setOpenReducer(!openStore))}>
      <Tooltip aria-label={arialButton} title={titleButton}>
        <IconButton size="large">{icon}</IconButton>
      </Tooltip>
    </St.Button>
  );
};

export default Button;

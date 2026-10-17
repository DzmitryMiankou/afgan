import React from "react";
import { St } from "./button.styled";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

type ButtonComponentType = React.FC<{ dataButton: dataButtonType }>;
type MyKeys = "titleButton" | "arialButton";
type WhileString<S = string> = { [K in MyKeys]: S };
export type dataButtonType = WhileString & { icon: React.ReactElement };

const Button: ButtonComponentType = ({
  dataButton: { arialButton, titleButton, icon },
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  console.log(open);
  return (
    <St.Button onClick={() => setOpen(!open)}>
      <Tooltip aria-label={arialButton} title={titleButton}>
        <IconButton size="large">{icon}</IconButton>
      </Tooltip>
    </St.Button>
  );
};

export default Button;

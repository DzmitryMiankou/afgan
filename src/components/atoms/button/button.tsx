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
  return (
    <St.Button>
      <Tooltip aria-label={arialButton} title={titleButton}>
        <IconButton size="large">{icon}</IconButton>
      </Tooltip>
    </St.Button>
  );
};

export default Button;

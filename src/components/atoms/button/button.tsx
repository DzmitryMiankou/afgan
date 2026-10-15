import { St } from "./button.styled";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export type dataButtonType<S = string> = {
  titleButton: S;
  arialButton: S;
  icon: React.ReactElement;
};
type ButtonComponentType = React.FC<{ dataButton: dataButtonType }>;

const Button: ButtonComponentType = ({
  dataButton: { arialButton, titleButton, icon },
}) => {
  return (
    <St.Button>
      <Tooltip aria-label={arialButton} title={titleButton}>
        <IconButton>{icon}</IconButton>
      </Tooltip>
    </St.Button>
  );
};

export default Button;

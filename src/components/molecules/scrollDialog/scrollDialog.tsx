import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { setClouse } from "../../../redux/openInfoReducer/openInfoReducer";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { INFO_CONTENT_MAP } from "../../../data/switchData";

const ScrollDialog: React.FC = () => {
  const openWindow = useSelector((state: RootState) => state.openInfo);
  const dispatchStore = useDispatch<AppDispatch>();
  const handleClose = () => dispatchStore(setClouse(false));

  const currentContent = INFO_CONTENT_MAP[openWindow.infType] || {
    title: "error",
    element: <></>,
  };

  return (
    <React.Fragment>
      <Dialog
        open={openWindow.data}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DialogTitle id="scroll-dialog-title">
            {currentContent.title}
          </DialogTitle>
          <DialogActions>
            <Tooltip title="Закрыть окно">
              <IconButton
                onClick={handleClose}
                aria-label="delete"
                size="large"
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </DialogActions>
        </div>

        <DialogContent>{currentContent.element}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default ScrollDialog;

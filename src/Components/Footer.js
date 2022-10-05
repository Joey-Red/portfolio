import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/system";
import myResume from "./resume/JoeyDalrympleResume.pdf";
function Footer() {
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openPhone, setOpenPhone] = React.useState(false);

  const handleClickSnack = () => {
    setOpenSnack(true);
    navigator.clipboard.writeText("joeyedalrymple@gmail.com");
  };
  const handleClickPhone = () => {
    setOpenPhone(true);
    navigator.clipboard.writeText("3166099213");
  };
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };
  const handleClosePhone = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenPhone(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const actionPhone = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClosePhone}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <div
        className="shared"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0px",
          gap: "20px",
        }}
        id="contactMe"
      >
        <button
          variant="outlined"
          onClick={handleClickOpen}
          className="footerButton shared standout buttonMimick"
        >
          Contact Me
        </button>
        <a
          href={myResume}
          download="JoeyDalrympleResume"
          className="buttonMimick footerButton shared standout"
        >
          Download Resume
        </a>

        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle
            style={{ cursor: "move", textAlign: "center" }}
            id="draggable-dialog-title"
          >
            Contact Me
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Stack>
                <div
                  className="shared contactName"
                  style={{ textAlign: "center" }}
                >
                  Joey Dalrymple
                </div>
                <div className="shared" style={{ padding: "6px 8px" }}>
                  Joeyedalrymple@gmail.com
                </div>
                <div>
                  <Button onClick={handleClickSnack}>Copy Email</Button>
                </div>
                <div className="shared" style={{ padding: "6px 8px" }}>
                  (316)-609-9213
                </div>
                <div>
                  <Button onClick={handleClickPhone}>Copy Phone Number</Button>
                </div>
              </Stack>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          open={openSnack}
          autoHideDuration={6000}
          onClose={handleCloseSnack}
          message="Email Copied"
          action={action}
        />
        <Snackbar
          open={openPhone}
          autoHideDuration={6000}
          onClose={handleClosePhone}
          message="Phone Number Copied"
          action={actionPhone}
        />
      </div>
    </>
  );
}

export default Footer;

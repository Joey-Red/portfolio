import React, { useState } from "react";
import BAP1 from "../../resources/projImg/Blog1.png";
import BAP2 from "../../resources/projImg/Blog2.png";
import BAP3 from "../../resources/projImg/Blog3.png";
import { CardMedia, Modal, Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function Project2() {
  let [img, setImg] = useState(1);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  let ModalImg = () => {
    if (img === 1) {
      return (
        <CardMedia
          className="projPic"
          component="img"
          image={BAP1}
          alt="Blog Api 1"
        />
      );
    }
    if (img === 2) {
      return (
        <CardMedia
          className="projPic"
          component="img"
          image={BAP2}
          alt="Blog Api 2"
        />
      );
    }
    if (img === 3) {
      return (
        <CardMedia
          className="projPic"
          component="img"
          image={BAP3}
          alt="Blog Api 3"
        />
      );
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "85%",
    maxHeight: "1000px",
    maxWidth: "1300px",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "4px",
    boxShadow: 24,
    p: 2,
  };

  let handleChange = (e, p) => {
    setImg(p);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let imgSwitch = () => {
    if (img === 1) {
      return (
        <CardMedia
          component="img"
          height="200px"
          image={BAP1}
          alt="Blog Api 1"
        />
      );
    }
    if (img === 2) {
      return (
        <CardMedia
          component="img"
          height="200px"
          image={BAP2}
          alt="Blog Api 2"
        />
      );
    }
    if (img === 3) {
      return (
        <CardMedia
          component="img"
          height="200px"
          image={BAP3}
          alt="Blog Api 3"
        />
      );
    }
  };
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{ModalImg(img)}</Box>
      </Modal>
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "8px" }}>
          <CardHeader
            action={
              <IconButton
                aria-label="settings"
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title="BlogApi"
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <Stack>
                <a
                  href="https://fish-blog-api-client.herokuapp.com/"
                  className="popLink"
                >
                  Live Project Link
                </a>
                <a
                  href="https://github.com/Joey-Red/blogApi"
                  className="popLink"
                >
                  Github Repo
                </a>
              </Stack>
            </Typography>
          </Popover>

          <div className="picContainer" onClick={handleOpenModal}>
            {imgSwitch(img)}
          </div>
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              className="typoDescription"
            >
              This project is a blog using the MERN stack. Where you can create
              posts, comment, edit, delete etc. It uses a monorepo where the
              React front end and Node/Express backend are hosted on heroku.
              This project uses MongoDB for the database.
            </Typography>
          </CardContent>
        </div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
        <Stack spacing={2}>
          <Pagination
            count={3}
            variant="text"
            color="primary"
            onChange={handleChange}
            project={img}
            style={{
              marginTop: "4px",
              backgroundColor: "rgba(255,255,255,0.8)",
              padding: "4px",
              borderRadius: "12px",
            }}
          />
        </Stack>
      </Container>
    </>
  );
}

export default Project2;

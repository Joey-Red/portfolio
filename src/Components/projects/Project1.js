import React, { useState } from "react";
import TW1 from "../../resources/projImg/TW1.png";
import TW2 from "../../resources/projImg/TW2.png";
import TW3 from "../../resources/projImg/TW3.png";
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

function Project1() {
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
                    image={TW1}
                    alt="The Watchlist 1"
                />
            );
        }
        if (img === 2) {
            return (
                <CardMedia
                    className="projPic"
                    component="img"
                    image={TW2}
                    alt="The Watchlist 2"
                />
            );
        }
        if (img === 3) {
            return (
                <CardMedia
                    className="projPic"
                    component="img"
                    image={TW3}
                    alt="The Watchlist 3"
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
        console.log(img);
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
                    image={TW1}
                    alt="The Watchlist 2"
                />
            );
        }
        if (img === 2) {
            return (
                <CardMedia
                    component="img"
                    height="200px"
                    image={TW2}
                    alt="The Watchlist 2"
                />
            );
        }
        if (img === 3) {
            return (
                <CardMedia
                    component="img"
                    height="200px"
                    image={TW3}
                    alt="The Watchlist 2"
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
                        title="The Watchlist"
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
                                    href="https://joey-red.github.io/tw-frontend/"
                                    className="popLink"
                                >
                                    Live Project Link
                                </a>
                                <a
                                    href="https://github.com/Joey-Red/tw-frontend"
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
                            This is my Movie rating website, you can search for
                            movies, view details about them and provide
                            feedback. Such as a rating and comment. Also
                            featured is a news API where pop culture news is
                            displayed and linked. On your profile you can have
                            full CRUD functionality, and there is an option to
                            copy a link to your profile so you can share your
                            list with others. This project uses the MERN stack,
                            along with Typescript.
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

export default Project1;

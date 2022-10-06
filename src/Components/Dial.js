import React from "react";
import { SpeedDialIcon } from "@mui/material";
import { SpeedDialAction } from "@mui/material";
import { SpeedDial } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Dial() {
  let reroutGh = () => {
    window.open("https://github.com/Joey-Red", "_blank");
  };
  let reroutLi = () => {
    window.open("https://www.linkedin.com/in/joey-dalrymple", "_blank");
  };
  let reroutTw = () => {
    window.open("https://twitter.com/JoeyDalrymple_", "_blank");
  };
  return (
    <SpeedDial
      className="speedDialLoc"
      ariaLabel="Important Links"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
      icon={<SpeedDialIcon style={{ color: "black" }} />}
      FabProps={{
        sx: {
          bgcolor: "#51D2EA",
          WebkitBoxShadow: "none",
          // boxShadow: "none",
          "&:hover": {
            bgcolor: "#51D2EA",
            // boxShadow: "none",
            WebkitBoxShadow: "none",
          },
        },
      }}
    >
      <SpeedDialAction
        key={"GitHub"}
        icon={<GitHubIcon />}
        tooltipTitle={"GitHub"}
        onClick={reroutGh}
      />
      <SpeedDialAction
        key={"Twitter"}
        icon={<TwitterIcon />}
        tooltipTitle={"Twitter"}
        onClick={reroutTw}
      />
      <SpeedDialAction
        key={"LinkedIn"}
        icon={<LinkedInIcon />}
        tooltipTitle={"LinkedIn"}
        onClick={reroutLi}
      />
    </SpeedDial>
  );
}

export default Dial;

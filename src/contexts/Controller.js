import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseIcon from "@mui/icons-material/Pause";
import useMusicPlayer from "../hooks/useMusicPlayer";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box, IconButton } from "@mui/material";

function Controller() {
  const { isPlaying, togglePlay, playNextTrack, playPreviousTrack } =
    useMusicPlayer();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <IconButton onClick={playPreviousTrack} color="white" size="large">
        <SkipPreviousIcon />
      </IconButton>
      <IconButton onClick={togglePlay} color="white" size="large">
        {isPlaying ? (
          <PauseIcon />
        ) : (
            <PlayCircleIcon />
        )}
      </IconButton>
      <IconButton onClick={playNextTrack} color="white" size="large">
        <SkipNextIcon />
      </IconButton>
    </Box>
  );
}

export default Controller;

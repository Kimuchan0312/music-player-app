import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Box, IconButton, Typography } from "@mui/material";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: 'center',
          marginTop: "3rem",
          height: '80%',
          backgroundColor: '#FFCCBC',
         
          padding: '5rem',
        }}
      >
        {trackList.map((track, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: "1rem",
              padding: "0.5rem",
              width: "100%",
              backgroundColor:
                track.name === currentTrackName ? "#E64A19" : "#f8eeef",
              color: track.name === currentTrackName ? "#ffff" : "#FF5722",
              cursor: "pointer",
              borderRadius: '10px',
              margin: '0.5rem',
            }}
            onClick={() => playTrack(index)}
          >
            <IconButton size="small" sx={{ padding: 0, color: "inherit" }}>
              {track.name === currentTrackName && isPlaying ? (
                <span>
                  <MusicNoteIcon />
                </span>
              ) : (
                <span>
                  <PauseCircleIcon />
                </span>
              )}
            </IconButton>
            <Typography>{track.name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TrackList;

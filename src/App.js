import Controller from "./contexts/Controller";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./contexts/TrackList";
import { Box } from '@mui/material';  

const App = () => {
  return (
    <MusicPlayerProvider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          maxWidth: '500px',
          marginBottom: '2rem',
          backgroundColor: '#f8eeef',
          borderRadius: '30px',
        }}
      > <TrackList />  
        <Controller />
        </Box>
    </MusicPlayerProvider>
  );
};

export default App;
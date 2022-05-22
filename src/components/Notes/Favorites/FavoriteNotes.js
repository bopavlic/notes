import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteNote from './FavoriteNote';

const FavoriteNotes = () => {
  const notes = useSelector((state) => state.notes);
  const favoriteList = notes.filter((note) => note.favorite === true);

  return (
    <Box className='favoriteNotes'>
      <Typography variant='h4' sx={{ marginBottom: '1rem' }}>
        List of Favorite notes
      </Typography>
      {favoriteList.length > 0 ? (
        <Box className='favoriteNotes__list'>
          {favoriteList.map((note) => (
            <FavoriteNote key={note.id} note={note} />
          ))}
        </Box>
      ) : (
        <Box>
          <Typography variant='h6'>
            You don't have any favorite note.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FavoriteNotes;

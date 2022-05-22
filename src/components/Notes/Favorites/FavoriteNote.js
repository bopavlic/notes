import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FavoriteNote = (props) => {
  const { note } = props;
  return (
    <Box>
      <Paper key={note.id} className='favoriteNote'>
        <Typography variant='body1'>ID: {note.id}</Typography>
        <Typography variant='body1'>Created At: {note.createdAt}</Typography>
        <Typography variant='body1'>Title: {note.title}</Typography>
        <Typography variant='body1'>Description: {note.description}</Typography>
      </Paper>
    </Box>
  );
};

export default FavoriteNote;

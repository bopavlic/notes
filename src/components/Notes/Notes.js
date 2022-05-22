import Box from '@mui/material/Box';
import NoteList from './NoteList';
import NotesAddForm from './NotesAddForm';

const Notes = () => {
  return (
    <Box>
      <NotesAddForm />
      <NoteList />
    </Box>
  );
};

export default Notes;

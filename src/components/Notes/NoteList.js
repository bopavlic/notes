import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { deleteNote, favoriteNote } from '../../features/notes/notesSlice';
import { Button, Pagination, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { filterRow } from '../../helpers/filterRow';
import { handleDownloadFile } from '../../helpers/handleDownloadFile';
import { initialCurrentPage, initialNotesPerPage, mainRow } from './consts';

const NoteList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [notesPerPage] = useState(initialNotesPerPage);
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleFavoriteNote = (id) => {
    dispatch(favoriteNote(id));
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const handlePaginationLength = () => {
    return Number(Math.ceil(notes.length / notesPerPage));
  };

  const handlePaginationChange = (e, value) => {
    e.preventDefault();
    setCurrentPage(value);
  };

  return (
    notes &&
    notes.length > 0 && (
      <Box className='noteList'>
        <TextField
          sx={{ marginBottom: '2rem' }}
          placeholder='Search By Title...'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <TableContainer sx={{ maxWidth: '80vw' }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                {mainRow.map((item, index) => (
                  <TableCell key={index} align='center'>
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filterRow(currentNotes, searchValue).map((note) => (
                <TableRow key={note.id}>
                  <TableCell align='center'>{note.id}</TableCell>
                  <TableCell align='center'>{note.createdAt}</TableCell>
                  <TableCell align='center'>{note.title}</TableCell>
                  <TableCell align='center'>{note.description}</TableCell>
                  <TableCell align='center'>
                    {note.favorite ? (
                      <FavoriteIcon
                        className='icon'
                        onClick={() => handleFavoriteNote(note.id)}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        className='icon'
                        onClick={() => handleFavoriteNote(note.id)}
                      />
                    )}
                  </TableCell>
                  <TableCell align='center'>
                    <Link to={`/${note.id}`} className={'link'}>
                      <EditIcon className='icon' />
                    </Link>
                  </TableCell>
                  <TableCell align='center'>
                    <DeleteIcon
                      className='icon'
                      onClick={() => handleDeleteNote(note.id)}
                    />
                  </TableCell>
                  <TableCell align='center'>
                    <DownloadIcon
                      className='icon'
                      onClick={() => handleDownloadFile(notes, note.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          sx={{ margin: '2rem 0' }}
          count={handlePaginationLength()}
          page={currentPage}
          onChange={handlePaginationChange}
        />
        <Box className='noteList__buttons'>
          <Link to={'favorites'} className={'link'}>
            <Button variant='outlined'>Check your favorite list</Button>
          </Link>
          <Button onClick={() => handleDownloadFile(notes)} variant='outlined'>
            Download All Notes
          </Button>
        </Box>
      </Box>
    )
  );
};

export default NoteList;

import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { editNote } from '../../features/notes/notesSlice';
import _ from 'lodash';

const NotesEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const currentNote = notes.find((note) => note.id === Number(id));
  const [formValues, setFormValues] = useState(currentNote);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(editNote(formValues));
    navigate('/');
  };

  const handleFieldChange = (event) => {
    setFormValues((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const checkIsEqual = useMemo(
    () => _.isEqual(formValues, currentNote),
    [formValues, currentNote]
  );

  useEffect(() => {
    if (!currentNote) {
      navigate('/');
    }
  }, [currentNote, navigate]);

  return (
    <form onSubmit={handleFormSubmit} className='notesAddForm'>
      <TextField
        type='text'
        name='title'
        label='Title'
        InputProps={{
          className: 'notesAddForm__input',
        }}
        defaultValue={currentNote?.title}
        onChange={handleFieldChange}
        required
      />
      <TextField
        type='text'
        name='description'
        label='Description'
        multiline={true}
        rows={3}
        InputProps={{
          className: 'notesAddForm__input',
        }}
        defaultValue={currentNote?.description}
        onChange={handleFieldChange}
        required
      />
      <Button variant='contained' type={'submit'} disabled={checkIsEqual}>
        Submit
      </Button>
    </form>
  );
};

export default NotesEditForm;

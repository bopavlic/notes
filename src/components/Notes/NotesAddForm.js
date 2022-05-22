import React, { useState } from 'react';
import { initialFormValues } from './consts';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addNote } from '../../features/notes/notesSlice';

const NotesAddForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const dispatch = useDispatch();

  const handleFieldChange = (event) => {
    setFormValues((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(formValues));
  };

  return (
    <form onSubmit={handleFormSubmit} className='notesAddForm'>
      <TextField
        type='text'
        name='title'
        label='Title'
        InputProps={{
          className: 'notesAddForm__input',
        }}
        value={formValues.title}
        onChange={handleFieldChange}
        required
      />
      <TextField
        type='text'
        name='description'
        label='Description'
        InputProps={{
          className: 'notesAddForm__input',
        }}
        value={formValues.note}
        onChange={handleFieldChange}
        required
      />
      <Button variant='contained' type={'submit'}>
        Submit
      </Button>
    </form>
  );
};

export default NotesAddForm;

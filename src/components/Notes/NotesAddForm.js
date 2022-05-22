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
        data-qa='title'
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
        value={formValues.description}
        onChange={handleFieldChange}
        required
        data-qa='description'
      />
      <Button variant='contained' type={'submit'} data-qa='add-note-button'>
        Submit
      </Button>
    </form>
  );
};

export default NotesAddForm;

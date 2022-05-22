import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { getCurrentDateAndTime } from '../../helpers/getCurrentDateAndTime';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote(state, action) {
      const { payload } = action;
      const newNote = {
        id: Number(_.uniqueId()),
        title: payload.title,
        description: payload.description,
        favorite: payload.favorite,
        createdAt: getCurrentDateAndTime(),
      };
      state.push(newNote);
    },
    deleteNote(state, action) {
      return state.filter((note) => note.id !== action.payload);
    },
    favoriteNote(state, action) {
      const selectedNote = state.find((note) => note.id === action.payload);
      if (selectedNote.favorite === false) {
        selectedNote.favorite = true;
        return state;
      }
      if (selectedNote.favorite === true) {
        selectedNote.favorite = false;
        return state;
      }
    },
    editNote(state, action) {
      const { payload } = action;
      const selectedNote = state.find((note) => note.id === payload.id);
      selectedNote.title = payload.title;
      selectedNote.description = payload.description;
    },
  },
});

export const { addNote, deleteNote, favoriteNote, editNote } =
  notesSlice.actions;
export default notesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote(state, action) {
      const newNote = {
        id: Number(_.uniqueId()),
        title: action.payload.title,
        description: action.payload.description,
        favorite: action.payload.favorite,
      };
      state.push(newNote);
    },
    deleteNote(state, action) {
      return state.filter((note) => note.id !== action.payload);
    },
    favoriteNote(state, action) {
      const findNote = state.find((note) => note.id === action.payload);

      if (findNote.favorite === false) {
        findNote.favorite = true;
        return state;
      }
      if (findNote.favorite === true) {
        findNote.favorite = false;
        return state;
      }
    },
  },
});

export const { addNote, deleteNote, favoriteNote } = notesSlice.actions;
export default notesSlice.reducer;

import { Route, Routes } from 'react-router-dom';
import FavoriteNotes from './components/Notes/Favorites/FavoriteNotes';
import Notes from './components/Notes/Notes';
import NotesEditForm from './components/Notes/NotesEditForm';
import './styles/global.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/:id' element={<NotesEditForm />} />
        <Route path='/favorites' element={<FavoriteNotes />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Notes from './components/Notes/Notes';
import NotesEditForm from './components/Notes/NotesEditForm';
import './styles/global.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/:id' element={<NotesEditForm />} />
      </Routes>
    </div>
  );
}

export default App;

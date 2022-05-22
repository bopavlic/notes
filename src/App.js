import { Route, Routes } from 'react-router-dom';
import Notes from './components/Notes/Notes';
import './styles/global.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;

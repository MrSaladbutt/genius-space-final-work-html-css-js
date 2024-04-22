import MainPage from './components/MainPage/MainPage';
import StudentsPage from './components/StudentsPage/StudentsPage';
import StaffPage from './components/StaffPage/StaffPage';
import CharactersInHouse from './components/CharactersInHousePage/CharactersInHouse';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/build/" element={<MainPage />} />
        <Route path="/build//students" element={<StudentsPage />} />
        <Route path="/build//staff" element={<StaffPage />} />
        <Route path="/build//characters" element={<CharactersInHouse />} />
      </Routes>
    </div>
  );
}

export default App;

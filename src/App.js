import MainPage from './components/MainPage/MainPage';
import StudentsPage from './components/StudentsPage/StudentsPage';
import StaffPage from './components/StaffPage/StaffPage';
import CharactersInHouse from './components/CharactersInHousePage/CharactersInHouse';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/genius-space-final-work-html-css-js/build/"
          element={<MainPage />}
        />
        <Route
          path="/genius-space-final-work-html-css-js/build//students"
          element={<StudentsPage />}
        />
        <Route
          path="/genius-space-final-work-html-css-js/build//staff"
          element={<StaffPage />}
        />
        <Route
          path="/genius-space-final-work-html-css-js/build//characters"
          element={<CharactersInHouse />}
        />
      </Routes>
    </div>
  );
}

export default App;

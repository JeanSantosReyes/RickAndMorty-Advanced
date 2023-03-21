import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { CharacterDetailsPage, CharactersPage, EpisodesPage, LocationsPage } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/character/:id' element={<CharacterDetailsPage />} />
          <Route path='/episodes' element={<EpisodesPage />} />
          <Route path='/locations' element={<LocationsPage />} />
          <Route path='/*' element={<Navigate to='/characters' replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

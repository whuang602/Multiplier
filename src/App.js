
// import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import LandingPage from './components/LandingPage'
import GamePage from './components/GamePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/game' element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

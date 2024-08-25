
import './App.css';
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom';

import LandingPage from './components/LandingPage'
import GamePage from './components/GamePage';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/game" element={<GamePage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

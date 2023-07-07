import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Home } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

// do not remove (Used for getting current path in tests)
export const LocationDisplay = () => {
  const location = useLocation();
  return (
    <div data-testid="location-display" style={{ display: 'none' }}>
      {location.pathname}
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <LocationDisplay />
      </Router>
    </div>
  );
}

export default App;

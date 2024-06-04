import React from 'react';
import './app.css';
import Dashboard from './components/dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;

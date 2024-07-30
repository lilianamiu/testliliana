import React from 'react';
import AppNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Dashboard />
    </div>
  );
}

export default App;
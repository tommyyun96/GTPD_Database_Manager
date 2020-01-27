import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './MainLayout'

function App() {
  return (
    <div className="app-container app-theme-white fixed-header fixed-sidebar fixed-footer">
        <MainLayout/>
    </div>
  );
}

export default App;

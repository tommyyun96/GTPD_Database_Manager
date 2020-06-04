import React from 'react';
import MainLayout from './MainLayout/MainLayout.js'
import {Switch, Route, BrowserRouter }from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="app-theme">
                <MainLayout/>
            </div>
        </BrowserRouter>
    );
}

export default App;

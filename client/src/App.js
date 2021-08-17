import React from 'react';
import './tailwind.output.css';
import './tailwind.css';
import Routes from './authentication/routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default App;

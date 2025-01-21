import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

// project imports
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="auth">
                    <Route path="signup" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

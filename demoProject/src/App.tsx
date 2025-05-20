import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import pages
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import InternshipPage from './pages/InternshipPage';
import NotesPage from './pages/NotesPage';
import CoursesPage from './pages/CoursesPage';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/internships" element={<InternshipPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
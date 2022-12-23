import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase';
import TeamPage from './pages/TeamPage/TeamPage';
import TeamUpdatesPage from './pages/TeamUpdatesPage/TeamUpdatesPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import { Tooltip } from 'bootstrap';

import { Provider } from 'react-redux';
import store from './store/store';
import "./styles/index.scss"
function App() {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
  });

  if (loading) return <h1>loading</h1>;
  if (user)
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Routes>
            <Route index element={<Navigate to="/teams" replace />} />
            <Route path='teams' element={<TeamsPage />} />
            <Route path='teams/:teamId' element={<TeamPage />} />
            <Route path='teams/:teamId/updates' element={<TeamUpdatesPage />} />
          </Routes>
        </div>
      </Provider>
    );
  else return <LoginPage />
}

export default App;
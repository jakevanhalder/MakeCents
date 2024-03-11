import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import Dashboard from './pages/Dashboard';
import Bills from './pages/Bills';
import Budgeting from './pages/Budgeting';
import Expenses from './pages/Expenses';
import Investments from './pages/Investments';
import MyGoals from './pages/MyGoals';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <LeftSidebar />
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/bills' element={ <Bills /> } />
          <Route path='/budgeting' element={ <Budgeting /> } />
          <Route path='/expenses' element={ <Expenses /> } />
          <Route path='/investments' element={ <Investments /> } />
          <Route path='/mygoals' element={ <MyGoals /> } />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/settings' element={ <Settings /> } />
          <Route path='/logout' element={ <Logout /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

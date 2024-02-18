import React from 'react'
import { Link } from 'react-router-dom';
import './LeftSidebar.css'

function LeftSidebar() {
  return (
    <div className='vertical-line'>
      <div className="left-sidebar-nav"> 
        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}><h2>MakeCents</h2></Link>
        <div className='nav-list'>
          <ul className="app-features">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/bills">Bills</Link></li>
            <li><Link to="/budgeting">Budgeting</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
            <li><Link to="/investments">Investments</Link></li>
            <li><Link to="/mygoals">My Goals</Link></li>
          </ul>

          <ul className="user-features">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>  
        </div> 
      </div>
    </div>
  )
}

export default LeftSidebar
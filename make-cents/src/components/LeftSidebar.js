import React from 'react'
import { Link } from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='left-sidebar'>
      <h1>MakeCents</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li>Bills</li>
        <li>Budgeting</li>
        <li>Expenses</li>
        <li>Investments</li>
        <li>Goals</li>
      </ul>
    </div>
  )
}

export default LeftSidebar
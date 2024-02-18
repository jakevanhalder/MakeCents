import React from 'react'
import { Link } from 'react-router-dom';

function GraphCardItem() {
  return (
    <>
      <Link to="/mygoals">
        <h2>Goal Progress</h2>
      </Link>
    </>
  )
}

export default GraphCardItem
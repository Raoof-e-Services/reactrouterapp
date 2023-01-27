import React from 'react'
import { Link } from 'react-router-dom';
import "./main.css";

function admin() {
  return (
    <>
    <div className='manue'>
      <p><Link to="/">Admin</Link></p>
      <p><Link to="/Students">Student</Link></p>
      <p><Link to="/Teacher">Teacher</Link></p>
      <p><Link to="/Generic">Generic</Link></p>
      <p><Link to="/Error">Error</Link></p>
      <p><Link to="/Test">Test</Link></p>    
    </div>
<div className="tablee">
    <h3>Reports</h3>
    <table>
      <thead>
        <tr>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Active teacher</th>
          <th>Active Classes</th>
          <th>Active Student</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ABC</td>
          <td>ABC</td>
          <td>ABC</td>
          <td>ABC</td>
          <td>ABC</td>

        </tr>
      </tbody>
    </table>
    </div>
    </>
  )
}


export default admin